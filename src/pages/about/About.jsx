import { Link } from 'react-router-dom';
import Menu from '../../components/menu/Menu';

const About = () => {
	return (
		<>
			<Menu />
			<h1>ABOUT</h1>
			<Link to='/'>
				<button>TO HOME</button>
			</Link>
		</>
	);
};

export default About;
