import { useParams } from 'react-router-dom';
import Menu from '../../components/menu/Menu';
import Leg from './leg/Leg';
import Pull from './pull/Pull';
import Push from './push/Push';

const Exercises = () => {
	const { type } = useParams();
	console.log(type);

	return (
		<>
			<Menu />

			{type === 'push' && <Push />}
			{type === 'pull' && <Pull />}
			{type === 'leg' && <Leg />}
		</>
	);
};

export default Exercises;
