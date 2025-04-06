import { NavLink } from 'react-router-dom';
import styles from './menu.module.css';

const Menu = () => {
	return (
		<nav>
			<ul className={styles.menu}>
				<li>
					<NavLink to='/'>HOME</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
