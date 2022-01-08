// Import the functions you need from the SDKs you need
  import { initializeApp } from 'firebase/app';
  import { getFirestore, collection, query, orderBy } from 'firebase/firestore';
  import { getStorage } from "firebase/storage";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "process.env.API_KEY",
    authDomain: "gallery-app-d2032.firebaseapp.com",
    projectId: "gallery-app-d2032",
    storageBucket: "gallery-app-d2032.appspot.com",
    messagingSenderId: "147835722751",
    appId: "1:147835722751:web:14b2bb819a8671b8d3a5ca"
  };
  //must do env variables, go to 14 min @ CRUD Tutorial Using React + Firebase by pedro tech on youtube

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const storage = getStorage(app);
  export const collectionRef = collection(db, "images");
  export const q = query(collectionRef, orderBy('createdAt', 'desc'));


  


  //