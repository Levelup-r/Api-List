# Api-List

Api-List ins't just a replacement for Public-Apis it is meant to be way more than that, with a unified format for APIs in the repository plus more informations about the API and How to use it, a knowledge base and even a status page.

## The Beginning

It takes more than a finger to code, and more than a man to make something really good, if you want to contribute to this project or even became a maintainer than please let me know, I alone cannot handle this one and I really want to see it come to life, the main goal of this project is to build a platform that is maintained by the community that show a list of free and public APIs for them to use in their projects or learning journey or anything, a place where they can spent less time searching for the API and learning how to use it, and more time actually using it by offering an informative index for the APIs plus an advanced search engine, following a specific format that is easy to understand, update, and maintain, and also a status page for the API with a status check in case it goes offline or anything

## The Format

Each API is put into its own json file that takes the name of the API as a name with underscore for spaces for example ``Api_List.json`` which goes into a folder named after the category it belongs to for example ``Utility``, inside the file goes specific information about the API in this format
```json
{
   "Name" : "Api_List",
   "Link" : "https://github.com/Api-List/Api-List",
   "Description" : "Api_List give you a list of Public Apis that you can use for your projects",
   "Auth" : "Yes / No / Unknown",
   "HTTPS" : "Yes / No / Unknown",
   "CORS" : "Yes/ No / Unknown",
   "Docs" : "https://github.com/Api-List/Api-List",
   "Status_Check": "True / False",
   "Status_Token" : "PRIVATE / PUBLIC / NONE"
}
``` 
The reason for using this kind of format is to allow further developement for this project and make it easy to improve it whenever needed.

also a status js file must be included aswell, that file must be a nodejs function that returns either ``Live`` or ``Offline`` or ``Unknown`` for the api and for its name must be ``Name.js`` aswell for example ``Api_List.js`` a template will be given when possible, and for the tokens, in case the api request a private token then the function should take it as a parameter and return ``Token`` in case the token is missing while if the api uses a public token that its okay to publish then it should be used as default value for the token parameter.

### _Cat.json

The ``_Cat.json`` file is meant to have information of the catgeory it follows a simple format 

```json
{
    "Name": "Name",
    "Slug": "Slug",
    "Description": "Description"
}

```

And it is meant to be used in the category description for the web interface.

## Status Check
The API status check is a system that i plan to add into this project, it works by simply requesting the API and checking if it is online and working as it should, the way this check works is by testing if the API respond in the way that it is meant to, for example the file will request ``jikan`` which is an anime api and ask for info about anime with id ``1`` if the title match which is in this case ``Cowboy Bebop`` then it should return as the api is ``Live``, if it fail to request the api then it should return ``Offline`` while if it manages to request the api sucessfully but it returns something other then the expected result in this case ``Cowboy Bebop`` then it should return ``unknown`` those files will then be given to a specific engine that will run them on request and show the results in a easy to use web interface.

## Contributing
Currently This project is in its very beginning and therefore it needs a lot of help so if you wants to help either by contributing or becaming a maintainer then you are welcome with open arms.
## License
[GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)
