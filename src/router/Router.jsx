import { Route, Routes } from 'react-router-dom';
import About from '../pages/about/About';
import Home from '../pages/home/Home';
import User from '../pages/user/User';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/macarena' element={<User name='macarena' />} />
			<Route path='/xavi' element={<User name='xavi' />} />
			<Route path='/diego' element={<User name='diego' />} />
		</Routes>
	);
};

export default Router;
