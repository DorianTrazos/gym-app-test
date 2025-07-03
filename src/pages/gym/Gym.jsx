import { Link } from 'react-router-dom';
import Menu from '../../components/menu/Menu';
import styles from './gym.module.css';
const Gym = () => {
	return (
		<>
			<Menu />
			<h1>GYM</h1>
			<div className={styles.exercises}>
				<Link to='/exercises/push'>
					<div className={styles.iconBox}>
						<img src='/assets/icons/front.png' alt='' />
						<h2>Pecho, triceps, hombro</h2>
					</div>
				</Link>
				<Link to='/exercises/pull'>
					<div className={styles.iconBox}>
						<img src='/assets/icons/back.png' alt='' />
						<h2>Espalda, biceps, antebrazo</h2>
					</div>
				</Link>

				<Link to='/exercises/leg'>
					<div className={styles.iconBox}>
						<img src='/assets/icons/leg.png' alt='' />
						<h2>Pierna</h2>
					</div>
				</Link>
			</div>
		</>
	);
};

export default Gym;
