import { doc, getDoc } from 'firebase/firestore';
import { exercisesCollectionReference } from '../../lib/config/firebase.config';

export const getExerciseById = async (id, routine) => {
	try {
		const docRef = doc(exercisesCollectionReference, id);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			const data = docSnap.data();

			// Accede solo a la parte que quieres, p.ej. data.routine.push
			const routineData = data.routine?.[routine];

			if (routineData) {
				return routineData;
			} else {
				console.warn(`Routine "${routine}" not found in document!`);
				return null;
			}
		} else {
			console.warn('No such document!');
			return null;
		}
	} catch (error) {
		console.error('Error fetching document:', error);
		throw error;
	}
};
