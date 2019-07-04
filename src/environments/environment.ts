// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// Variables de entorno

export const environment = {
  production: false,
  firebaseConfig: {
		apiKey: "AIzaSyCTAZHESPDTCrIlH85WgUd7nVwo8mKxMZ4",
		authDomain: "ionic4-firebase-bdg.firebaseapp.com",
		databaseURL: "https://ionic4-firebase-bdg.firebaseio.com",
		projectId: "ionic4-firebase-bdg",
		storageBucket: "",
		messagingSenderId: "149230727062",
		appId: "1:149230727062:web:371e7fea6528cd3f"
	  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
