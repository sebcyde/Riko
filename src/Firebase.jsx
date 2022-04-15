// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
	getAuth,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyA_0CxSQDJZRLRRRQtL9NRq1b_nR-j3FmI',
	authDomain: 'riko-5125d.firebaseapp.com',
	projectId: 'riko-5125d',
	storageBucket: 'riko-5125d.appspot.com',
	messagingSenderId: '45697962042',
	appId: '1:45697962042:web:ed33a67fd59a6e5bf56503',
	measurementId: 'G-MZVRYT3SW3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

