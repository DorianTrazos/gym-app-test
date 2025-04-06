import { useContext } from 'react';

import { AuthContext } from '../../lib/contexts/Auth.context';
import { loginUser, logoutUser } from '../../utils/firebase/auth';

const Login = () => {
	const { user, loading } = useContext(AuthContext);
	if (loading) return <h2>Loading...</h2>;
	if (user)
		return (
			<>
				<h2>Welcome {user.displayName}</h2>
				<button onClick={logoutUser}>Sign Out</button>
			</>
		);

	return (
		<>
			<h1>Login</h1>
			<button onClick={loginUser}>LOGIN WITH GOOGLE</button>
		</>
	);
};

export default Login;
