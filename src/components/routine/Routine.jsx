import { useState } from 'react';
import { WEIGHTS } from '../../constants/weights';
import { changeWeight } from '../../utils/firebase/db';
import styles from './routine.module.css';

const Routine = ({ exercise, weight, reps, userId }) => {
	const [edit, setEdit] = useState(false);
	const [selectedWeight, setSelectedWeight] = useState(null);
	return (
		<>
			<div className={styles['routine-card']} onClick={() => setEdit(true)}>
				<h2>{exercise}</h2>
				<div>
					<h3>{reps}</h3>
					<h3>{weight}Kg</h3>
				</div>
			</div>
			{edit && (
				<div>
					<select
						name='weight'
						id='weight'
						onChange={event => setSelectedWeight(event.target.value)}
					>
						{WEIGHTS.map(weight => (
							<option key={weight} value={weight}>
								{weight}
							</option>
						))}
					</select>
					<div>
						<button onClick={() => setEdit(false)}>Cancel</button>
						<button
							onClick={() =>
								changeWeight(selectedWeight, userId, setSelectedWeight, setEdit)
							}
						>
							Save
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default Routine;
