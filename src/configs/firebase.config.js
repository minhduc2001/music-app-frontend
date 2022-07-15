import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBC337IV_8pIAzM6R16uBWrD-SE9BZs-yI",
    authDomain: "stream-e2870.firebaseapp.com",
    databaseURL: "https://stream-e2870-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "stream-e2870",
    storageBucket: "stream-e2870.appspot.com",
    messagingSenderId: "585851893244",
    appId: "1:585851893244:web:8ceaedeba5e17cb9812e79"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);