import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAp74Aw3dkNRZwr6oGfE89XkpY1VmV65wc",
    authDomain: "proyecto-lion-ecommerce.firebaseapp.com",
    projectId: "proyecto-lion-ecommerce",
    storageBucket: "proyecto-lion-ecommerce.appspot.com",
    messagingSenderId: "949276085063",
    appId: "1:949276085063:web:85f49398809c11a6225a62"
});

export const getFirebase = () => {
    return app;
}

export const getFirestore = () => {
    return firebase.firestore(app); 
}

