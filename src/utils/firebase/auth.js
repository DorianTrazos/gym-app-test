import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../lib/config/firebase.config';

export const loginUser = async () => {
	const provider = new GoogleAuthProvider();

	try {
		await signInWithPopup(auth, provider);
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
