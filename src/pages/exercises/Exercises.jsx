import { useParams } from 'react-router-dom';
import Menu from '../../components/menu/Menu';
import Push from './push/Push';

const Exercises = () => {
	const { type } = useParams();
	console.log(type);

	return (
		<>
			<Menu />

			{type === 'front' && <Push />}
		</>
	);
};

export default Exercises;
