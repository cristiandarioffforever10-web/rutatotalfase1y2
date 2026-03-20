import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAcAUgiW9LX_lmqZ6sY7z6pesz0wZVBXfI",
    authDomain: "fase1y2-rutatotal360.firebaseapp.com",
    projectId: "fase1y2-rutatotal360",
    storageBucket: "fase1y2-rutatotal360.firebasestorage.app",
    messagingSenderId: "604038358009",
    appId: "1:604038358009:web:e6df6b0d81e4d7771dd328",
    measurementId: "G-DXQ1FSYPW8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
