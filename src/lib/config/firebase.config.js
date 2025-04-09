// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDaEZbNeeJwi7tduWSSXGnXVFlMlQJpUy8',
	authDomain: 'gym-app-79b60.firebaseapp.com',
	projectId: 'gym-app-79b60',
	storageBucket: 'gym-app-79b60.firebasestorage.app',
	messagingSenderId: '172139435242',
	appId: '1:172139435242:web:027ca114a31795577df393'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export const workoutCollectionReference = collection(db, 'workout');
export const exercisesCollectionReference = collection(db, 'exercises');
