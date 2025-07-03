import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
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
		const userDocRef = doc(exercisesCollectionReference, user.uid);
		console.log('Usuario autenticado:', user.displayName);
		await setDoc(
			userDocRef,
			{
				routine: ROUTINE_INFO,
				updatedAt: new Date() // opcional
			},
			{ merge: true } // para no sobreescribir otros campos si ya existen
		);

		console.log(`Rutina guardada para el usuario ${user.uid}`);
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
