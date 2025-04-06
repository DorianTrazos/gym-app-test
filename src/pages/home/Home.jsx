import { useContext } from 'react';
import Login from '../../components/login/Login';
import Menu from '../../components/menu/Menu';
import { AuthContext } from '../../lib/contexts/Auth.context';

const Home = () => {
	const { user } = useContext(AuthContext);
	return (
		<>
			<h1>HOME</h1>
			<Login />
			{user && <Menu />}
		</>
	);
};

export default Home;
