import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD8L2cxle9wtHFBgW3C-5mwex5TadHJLEc",
    authDomain: "restaurants-boss.firebaseapp.com",
    projectId: "restaurants-boss",
    storageBucket: "restaurants-boss.appspot.com",
    messagingSenderId: "318522992141",
    appId: "1:318522992141:web:e935abb1094e670046d744"
};

export const app = initializeApp(firebaseConfig);