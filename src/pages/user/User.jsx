import Menu from '../../components/menu/Menu';
import { USERS_INFO } from '../../constants/users-info';

const User = ({ name }) => {
	console.log(name);
	const userData = USERS_INFO[name];

	return (
		<>
			<Menu />
			<h1>{userData.name}</h1>
			<h2>{userData.city}</h2>
			<ul>
				<li>{userData.pets[0].id}</li>
			</ul>
		</>
	);
};

export default User;
