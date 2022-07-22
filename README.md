Description of folders and their purposes:

src/models: Contains all the mongoose model objects which have their schema and definition defined in the files as well.
src/routers: Contains all the route method setups for each model object, uses the express router object for easy definition of route handlers.
src/app.js: Running of all the relevant routers on the express server.
src/index.js: listening on the relevant port (port is taken from environment var in order to utilise heroku for deployment)