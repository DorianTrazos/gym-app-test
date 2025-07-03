import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { auth, exercisesCollectionReference } from '../config/firebase.config';
import { AuthContext } from '../contexts/Auth.context';

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [routine, setRoutine] = useState(null); // aquí almacenaremos la rutina
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribeAuth = auth.onAuthStateChanged(user => {
			setUser(user);
			setLoading(false);
		});

		return () => unsubscribeAuth();
	}, []);

	useEffect(() => {
		if (!user) {
			setRoutine(null);
			return;
		}

		const userDocRef = doc(exercisesCollectionReference, user.uid);

		// Escuchar en tiempo real los cambios en la rutina del usuario
		const unsubscribeRoutine = onSnapshot(
			userDocRef,
			docSnap => {
				if (docSnap.exists()) {
					const data = docSnap.data();
					setRoutine(data.routine);
				} else {
					console.warn(`No se encontró rutina para el usuario ${user.uid}`);
					setRoutine(null);
				}
			},
			error => {
				console.error('Error al escuchar la rutina:', error);
			}
		);

		return () => unsubscribeRoutine();
	}, [user]);

	return (
		<AuthContext.Provider value={{ user, routine, loading }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
