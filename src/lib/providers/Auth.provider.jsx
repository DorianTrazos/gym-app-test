import { useEffect, useState } from 'react';
import { auth } from '../config/firebase.config';
import { AuthContext } from '../contexts/Auth.context';

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	console.log(user);
	useEffect(() => {
		const unsubscribeAuth = auth.onAuthStateChanged(user => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}

			setLoading(false);
		});

		return () => {
			unsubscribeAuth();
		};
	}, []);

	return (
		<AuthContext.Provider value={{ user, loading }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
