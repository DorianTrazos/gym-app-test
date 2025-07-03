import { useContext, useEffect, useState } from 'react';
import Routine from '../../../components/routine/Routine';
import { AuthContext } from '../../../lib/contexts/Auth.context';
import { getExerciseById } from '../../../utils/firebase/db';

const Leg = () => {
	const { user, loading } = useContext(AuthContext);
	const [exerciseData, setExerciseData] = useState(null);

	useEffect(() => {
		if (loading) return;
		const fetchData = async () => {
			const data = await getExerciseById(user.uid, 'leg');
			setExerciseData(data);
		};

		fetchData();
	}, [user, loading]);

	if (loading) return <h2>Loading...</h2>;

	return (
		<>
			<h1>Day 3 - Leg</h1>
			{exerciseData?.map(routine => (
				<Routine key={routine.exercise} userId={user.uid} {...routine} />
			))}
		</>
	);
};

export default Leg;
