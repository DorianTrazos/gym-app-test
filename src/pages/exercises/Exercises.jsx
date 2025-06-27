import { useParams } from 'react-router-dom';
import Menu from '../../components/menu/Menu';

const Exercises = () => {
	const { type } = useParams();
	console.log(type);

	return (
		<>
			<Menu />
			<h1>Exercises</h1>
		</>
	);
};

export default Exercises;
