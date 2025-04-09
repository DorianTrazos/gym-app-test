import { doc, setDoc } from 'firebase/firestore';
import { BrowserRouter } from 'react-router-dom';
import { exercisesCollectionReference } from './lib/config/firebase.config';
import AuthProvider from './lib/providers/Auth.provider';
import Router from './router/Router';

const App = () => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Router />
			</AuthProvider>
		</BrowserRouter>
	);
};

const mondayExercises = [
	{ name: 'Press banca con barra', series: 3, reps: 12, lastWeight: 30 },
	{ name: 'Press pecho en máquina', series: 3, reps: 15, lastWeight: 0 },
	{ name: 'Aperturas pecho máquina', series: 3, reps: 15, lastWeight: 0 },
	{ name: 'Elevaciones laterales', series: 3, reps: 12, lastWeight: 6 },
	{ name: 'Elevaciones frontales', series: 3, reps: 12, lastWeight: 6 },
	{ name: 'Press militar con mancuernas', series: 3, reps: 12, lastWeight: 10 },
	{ name: 'Triceps Polea Cuerda', series: 3, reps: 12, lastWeight: 10 },
	{ name: 'Triceps Polea palo', series: 3, reps: 12, lastWeight: 10 }
];

const saveMondayExercises = async () => {
	const docRef = doc(
		exercisesCollectionReference,
		'2fcJMkhQDdZxYiW1sBL9goaZLI23'
	);

	await setDoc(docRef, {
		routine: {
			monday: {
				exercises: mondayExercises,
				muscles: 'Pecho, hombros, tríceps'
			},
			tuesday: {
				exercises: mondayExercises
			},
			wednesday: {
				exercises: mondayExercises
			},
			thursday: {
				exercises: mondayExercises
			},
			friday: {
				exercises: mondayExercises
			}
		}
	});

	console.log('🔥 Rutina del lunes cargada en Firestore');
};

// saveMondayExercises();

export default App;
