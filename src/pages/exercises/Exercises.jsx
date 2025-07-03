import { useParams } from 'react-router-dom';
import Menu from '../../components/menu/Menu';
import Back from './back/Back';
import Leg from './leg/Leg';
import Push from './push/Push';

const Exercises = () => {
	const { type } = useParams();
	console.log(type);

	return (
		<>
			<Menu />

			{type === 'push' && <Push />}
			{type === 'pull' && <Back />}
			{type === 'leg' && <Leg />}
		</>
	);
};

export default Exercises;
