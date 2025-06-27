import Menu from '../../components/menu/Menu';
import styles from './gym.module.css';
const Gym = () => {
	return (
		<>
			<Menu />
			<h1>GYM</h1>
			<div className={styles.exercises}>
				<div className={styles.iconBox}>
					<img src='/assets/icons/front.png' alt='' />
					<h2>Pecho, triceps, hombro</h2>
				</div>
				<div className={styles.iconBox}>
					<img src='/assets/icons/back.png' alt='' />
					<h2>Espalda, biceps, antebrazo</h2>
				</div>
				<div className={styles.iconBox}>
					<img src='/assets/icons/leg.png' alt='' />
					<h2>Pierna</h2>
				</div>
			</div>
		</>
	);
};

export default Gym;
