import { Route, Routes } from 'react-router-dom';
import Gym from '../pages/gym/Gym';
import History from '../pages/history';
import Home from '../pages/home/Home';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/gym' element={<Gym />} />
			<Route path='/history' element={<History />} />
		</Routes>
	);
};

export default Router;
