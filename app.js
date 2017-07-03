import auth0 from 'auth0-js';
import {CLIENT_ID, CLIENT_DOMAIN} from './app.config';

const REDIRECT_SILENT = 'http://localhost:8080/static/silent-callback.html';
const SCOPE = 'openid email profile'; 

var auth = new auth0.WebAuth({
  clientID: CLIENT_ID,
  domain: CLIENT_DOMAIN,
  scope: SCOPE
});

window.renewAuth = () => {
  auth.renewAuth({
    scope: SCOPE,
    redirectUri: REDIRECT_SILENT,
    usePostMessage: true
  }, (err, res) => {
    //This is a possible fix, but it does not feel good... 
    // if(err || !('state' in res)) 
    //    renewAuth(); 
    // else 
      console.log(err, res);
  });
}

// This will cause following console output (which is not expected):
// {type: "webpackOk", data: undefined}
renewAuth();