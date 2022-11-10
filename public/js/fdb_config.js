console.log('started');
        const firebaseConfig = {
                apiKey: "AIzaSyB5WWzZJH3JWVpEb6Xh8s-FxWlw7jNh04w",
                authDomain: "pythonkuanysh.firebaseapp.com",
                projectId: "pythonkuanysh",
                storageBucket: "pythonkuanysh.appspot.com",
                messagingSenderId: "700387796733",
                appId: "1:700387796733:web:69bb3890e22416c45f0094",
                measurementId: "G-ZB0PNJ5R9E"
              };
         firebase.initializeApp(firebaseConfig);
         let fdb= firebase.firestore();