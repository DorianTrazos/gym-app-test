import { doc, getDoc } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import Menu from '../../components/menu/Menu';
import { workoutCollectionReference } from '../../lib/config/firebase.config'; // ahora sí lo usamos directo
import { AuthContext } from '../../lib/contexts/Auth.context';

const History = () => {
	const [workouts, setWorkouts] = useState([]);
	const { user, loading } = useContext(AuthContext);

	console.log(workouts);

	useEffect(() => {
		if (!user || loading) return;
		fetchWorkouts(setWorkouts, user);
	}, [user, loading]);

	if (loading || !workouts.date) return <h2>Loading...</h2>;

	return (
		<>
			<Menu />
			<h1>Historial de entrenos</h1>
			<h2>{workouts.date}</h2>
			{workouts.exercises.map(exercise => (
				<div key={exercise.name}>
					<h3>{exercise.name}</h3>
					<p>Reps: {exercise.reps.join(' - ')}</p>
					<p>Weight: {exercise.weight.join(' - ')}</p>
				</div>
			))}
		</>
	);
};

const fetchWorkouts = async (setWorkouts, user) => {
	const docRef = doc(workoutCollectionReference, user.uid);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		const data = docSnap.data();

		setWorkouts(data['24/03/2025']);
	} else {
		console.log('No hay documento');
	}
};

export default History;
