import { NavLink } from 'react-router-dom';
import styles from './menu.module.css';

const Menu = () => {
	return (
		<nav>
			<ul className={styles.menu}>
				<li>
					<NavLink className={styles['menu-link']} to='/gym'>
						<img
							className={styles['menu-link-icon']}
							src='/assets/icons/gym.svg'
							alt=''
						/>
						<span>Gym</span>
					</NavLink>
				</li>
				<li>
					<NavLink className={styles['menu-link']} to='/'>
						<img
							className={styles['menu-link-icon']}
							src='/assets/icons/home.svg'
							alt=''
						/>
						<span>Home</span>
					</NavLink>
				</li>
				<li>
					<NavLink className={styles['menu-link']} to='/history'>
						<img
							className={styles['menu-link-icon']}
							src='/assets/icons/history.svg'
							alt=''
						/>
						<span>History</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
