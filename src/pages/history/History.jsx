import { doc, getDoc } from 'firebase/firestore';
import { useContext } from 'react';
import Menu from '../../components/menu/Menu';
import { workoutCollectionReference } from '../../lib/config/firebase.config'; // ahora sí lo usamos directo
import { AuthContext } from '../../lib/contexts/Auth.context';

const History = () => {
	// const [workouts, setWorkouts] = useState([]);
	const { user, loading } = useContext(AuthContext);

	// useEffect(() => {
	// 	if (!user || loading) return;
	// 	fetchWorkouts(setWorkouts, user);
	// }, [user, loading]);

	if (loading) return <h2>Loading...</h2>;

	return (
		<>
			<Menu />
			<h1>Historial de entrenos</h1>
			<h2>PROXIMAMENTE</h2>
		</>
	);
};

const fetchWorkouts = async (setWorkouts, user) => {
	const docRef = doc(workoutCollectionReference, user.uid);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		const data = docSnap.data();
		if (data.date) {
			setWorkouts(data);
		}
	} else {
		setWorkouts([]);
		console.log('No hay documento');
	}
};

export default History;
