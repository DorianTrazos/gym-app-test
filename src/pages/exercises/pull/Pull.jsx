import { useContext, useEffect, useState } from 'react';
import Routine from '../../../components/routine/Routine';
import { AuthContext } from '../../../lib/contexts/Auth.context';
import { getExerciseById } from '../../../utils/firebase/db';

const Pull = () => {
	const { user, loading } = useContext(AuthContext);
	const [exerciseData, setExerciseData] = useState(null);

	useEffect(() => {
		if (loading) return;
		const fetchData = async () => {
			const data = await getExerciseById(user.uid, 'pull');
			setExerciseData(data);
		};

		fetchData();
	}, [user, loading]);

	if (loading) return <h2>Loading...</h2>;

	return (
		<>
			<h1>Day 2 - Pull</h1>
			{exerciseData?.map((routine, index) => (
				<Routine
					key={routine.exercise}
					userId={user.uid}
					index={index}
					{...routine}
				/>
			))}
		</>
	);
};

export default Pull;
