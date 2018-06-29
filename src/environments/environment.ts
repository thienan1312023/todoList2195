// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
      apiKey: "AIzaSyAXz5ktJ46GJEZ8JAVCwFpoq5EAieMIWbA",
      authDomain: "todoapp2195.firebaseapp.com",
      databaseURL: "https://todoapp2195.firebaseio.com",
      projectId: "todoapp2195",
      storageBucket: "todoapp2195.appspot.com",
      messagingSenderId: "751101636799" 
  }
};
