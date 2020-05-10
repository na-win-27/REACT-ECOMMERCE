import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const Config={
    apiKey: "AIzaSyCZvbwAhnqImjbYuuvKNGSoCIHEvsYvNVY",
    authDomain: "crown-db-f8efb.firebaseapp.com",
    databaseURL: "https://crown-db-f8efb.firebaseio.com",
    projectId: "crown-db-f8efb",
    storageBucket: "crown-db-f8efb.appspot.com",
    messagingSenderId: "628529605857",
    appId: "1:628529605857:web:b3babf3332685919f05ba0",
    measurementId: "G-22RHE9DXGJ"
  };


  firebase.initializeApp(Config);



  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;


    
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  

  export const auth=firebase.auth()
  export const firestore =firebase.firestore()


  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'})
  export const signInwithGoogle=()=>auth.signInWithPopup(provider)


  export default firebase;