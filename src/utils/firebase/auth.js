import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { ROUTINE_INFO } from '../../constants/routines';
import {
	auth,
	exercisesCollectionReference
} from '../../lib/config/firebase.config';

export const loginUser = async () => {
	const provider = new GoogleAuthProvider();

	try {
		const result = await signInWithPopup(auth, provider);
		const user = result.user;
		await initializeUserRoutineIfNeeded(user.uid);
	} catch (error) {
		console.error('Error al iniciar sesión:', error.code, error.message);
	}
};

export const logoutUser = async () => {
	try {
		await signOut(auth);
		console.log('Usuario ha cerrado sesión');
	} catch (error) {
		console.error('Error al cerrar sesión:', error.code, error.message);
	}
};

const initializeUserRoutineIfNeeded = async userId => {
	try {
		const userDocRef = doc(exercisesCollectionReference, userId);
		const docSnap = await getDoc(userDocRef);

		if (!docSnap.exists()) {
			await setDoc(userDocRef, {
				routine: ROUTINE_INFO
			});
			console.log(`Rutina inicial guardada para el usuario ${userId}`);
		} else {
			console.log('El usuario ya tiene una rutina. No se sobreescribe.');
		}
	} catch (error) {
		console.error('Error al inicializar rutina:', error);
	}
};
