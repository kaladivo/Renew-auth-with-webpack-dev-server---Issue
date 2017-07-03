This repository was created for auth0 ticket. 

To run this app you should follow these steps: 
- execute `yarn install`
- duplicate and edit app.config.js.example > app.config.js
- duplicate and edit silent callback static page at dist/static/silent-callback.html.example > dist/static/silent-callback.html (do not forget to fill right domain and client id);
- to start the app run `yarn start`

In the developer console you should see that the first output was not an object from auth0 but 
some webpack event... 
