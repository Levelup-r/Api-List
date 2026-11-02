// SPDX-License-Identifier: GPL-3.0-or-later
// Original status check contributed on 2026-11-02. See repository LICENSE.
const https = require('node:https');

module.exports = function Bucketlist_Dream_of_the_Day() {
  return new Promise((resolve) => {
    let settled = false;
    const finish = (status) => {
      if (!settled) { settled = true; resolve(status); }
    };
    const request = https.get('https://bucketlist.nl/api/droom-van-de-dag', {
      headers: { Accept: 'application/json', 'User-Agent': 'Api-List status check' },
    }, (response) => {
      if (response.statusCode !== 200) { response.resume(); finish('Offline'); return; }
      response.setEncoding('utf8');
      let body = '';
      response.on('data', (chunk) => {
        body += chunk;
        if (body.length > 65536) { finish('Unknown'); request.destroy(); }
      });
      response.on('error', () => finish('Offline'));
      response.on('end', () => {
        try {
          const data = JSON.parse(body);
          const parts = new Intl.DateTimeFormat('en', { timeZone: 'Europe/Amsterdam', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date());
          const part = (type) => parts.find((item) => item.type === type).value;
          const today = [part('year'), part('month'), part('day')].join('-');
          const source = new URL(data.dream.canonicalUrl);
          const valid = data.date === today && data.language === 'nl' && data.scope === 'nederland'
            && typeof data.dream.title === 'string' && data.dream.title.trim().length > 0
            && source.protocol === 'https:' && source.hostname === 'bucketlist.nl'
            && source.pathname.startsWith('/ervaringen/');
          finish(valid ? 'Live' : 'Unknown');
        } catch { finish('Unknown'); }
      });
    });
    request.setTimeout(10000, () => { finish('Offline'); request.destroy(); });
    request.on('error', () => finish('Offline'));
  });
};
