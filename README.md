# Poké-MongoDB

You are going to build a Pokémon API with Node, Express, and MongoDB. Your API will allow users to perform CRUD operations on each of the 151 original Pokémon, and power a front-end.

## How to start this app

* `npm install`
* `run mongod in terminal`
* `in order to seed the db with the original 151 pokemon, navigate to /server/db/ in your terminal and then run node on insertAllPokemon.js`
* `while in the root folder, type into your terminal: nodemon server.js`
* `navigate to localhost:3000 in your browser of choice`


## Requirements

In addition to your frequent commits, **make a commit after completing each of the following steps** (marked by check boxes), indicating that you have just completed it. It may not be the case that you have time to complete all of the following steps, but regardless, **you must work on them in order** (though there is an escape hatch for the back-end if you need).

- Back-end
- Front-end
- Middleware
- Testing

### Back-end

> **Pro tip:** Install and use [Postman](https://www.getpostman.com/) to test your API routes for this section

Using the existing code provided in `server/`, follow the steps below to build out a Pokémon API:

|      URL             | HTTP Verb | Request Body |                         Result                                           |
|:--------------------:|:---------:|:------------:|:------------------------------------------------------------------------:|
| /api/pokemon         |    GET    |    empty     |                                               Respond with JSON of all Pokémon |
| /api/pokemon         |    POST   |     JSON     |                    Create new Pokémon and respond with JSON of created Pokémon |
| /api/pokemon         |   DELETE  |    empty     |                 Delete all Pokémon in database and respond with JSON of deleted Pokémon |
| /api/pokemon/:number |    GET    |    empty     |                     Respond with JSON of single Pokémon with matching `number` |
| /api/pokemon/:number |    PUT    |     JSON     | Update Pokémon with matching `number` and respond with JSON of updated Pokémon |
| /api/pokemon/:number |   DELETE  |    empty     | Delete Pokémon with matching `number` and respond with JSON of deleted Pokémon |


- [x] Connect Mongoose to your local Mongo database in `db/index.js`
- [x] Create a Pokémon model in `resources/pokemon/Pokemon.js` and register it with Mongoose as the `Pokemon` collection with the following properties:
  - [x] `number`, a unique number
  - [x] `name`, a unique string
  - [x] `types`, an array of strings
  - [x] `imageUrl`, a string
- [x] In `insertAllPokemon.js`, write a function that can populate your Mongo database with the 151 original Pokémon found in `data/pokemon.json`, then run the script/invoke the function so that the database is populated.
- [x] Complete the controller in `resources/pokemon/pokemonController.js` that interacts with your Pokémon model.
- [O] Create a router in `resources/pokemon/pokemonRouter.js` that utilizes each of your controller's methods. Be sure to handle errors appropriately!
- [O] Import `pokemonRouter` into `server.js` and assign it to the correct route
- [O] Write at least two tests in `test/api-spec.js` that will help assure future developers that the API is working as intended.

### Front-end

> **Escape hatch:** If you have a showstopping bug in your server, mock it out with [json-server](https://github.com/typicode/json-server). You'll have to change the structure of `data/pokemon.json` slightly to make this work.

Inside of `client/`, implement a single page front end to interact with this API using either Angular or React. There is a webpack config file already set up if you are choosing react - please read the `webpack.config.js` carefully before starting.

Your front end should be served from Express and should allow the user to:
- [x] Display all Pokémon (with their images)
- [x] Add a new Pokémon
- [x] Filter Pokémon based on their type (but NOT on other properties)

### Middleware

> **Important:** You must complete all of the steps in [back-end](#back-end) before moving onto this section.

Inside of `server/middleware/rateLimiter.js`, create a custom middleware function in which you implement rate limiting for your API with the following guidelines.

- [ ] Require each request to `/api/pokemon` to include a `User` property in the header
- [ ] Only allow a single user to make 100 requests per hour
- [ ] Mount your middleware in an appropriate location in `server/server.js`
- [ ] Update your front-end to send `user` property with each request

### Available Resources

You may visit each of these resources directly, or search for them on Google with the [`site:`](https://support.google.com/websearch/answer/2466433?hl=en) operator:

* [MDN](https://developer.mozilla.org/en-US/)
* [Stack Overflow](http://stackoverflow.com/)
* [Express docs](https://expressjs.com/)
* [Mongo docs](https://docs.mongodb.com/)
* [Mongoose docs](http://mongoosejs.com/docs/index.html)
* [React docs](https://facebook.github.io/react/docs/getting-started.html)
* [Angular docs](https://docs.angularjs.org/api)
* [Webpack docs](https://webpack.github.io/docs/)
* Official documentation for any npm package that you install


