import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { WEIGHTS } from '../../constants/weights';
import { exercisesCollectionReference } from '../../lib/config/firebase.config';
import { AuthContext } from '../../lib/contexts/Auth.context';
import styles from './routine.module.css';

const Routine = ({ exercise, index, weigth, reps, userId }) => {
	const [edit, setEdit] = useState(false);
	const [savingData, setSavingData] = useState(false);
	const [selectedWeight, setSelectedWeight] = useState(null);
	const { type } = useParams(); // push, pull, leg
	const { routine } = useContext(AuthContext);

	const currentExercise = routine?.[type]?.[index] || {
		exercise,
		reps,
		weigth
	};

	return (
		<>
			<div className={styles['routine-card']} onClick={() => setEdit(true)}>
				<h2>{currentExercise.exercise}</h2>
				<div>
					<h3>{currentExercise.reps}</h3>
					<h3>{currentExercise.weigth}Kg</h3>
				</div>
			</div>

			{edit && (
				<div className={styles['edit-panel']}>
					<select
						name='weigth'
						id='weigth'
						value={selectedWeight ?? currentExercise.weigth}
						onChange={event => setSelectedWeight(event.target.value)}
					>
						{WEIGHTS.map(weight => (
							<option key={weight} value={weight}>
								{weight}
							</option>
						))}
					</select>

					<div className={styles['routine-buttons']}>
						<button
							className={styles['routine-button-cancel']}
							onClick={() => setEdit(false)}
						>
							Cancel
						</button>
						<button
							className={styles['routine-button']}
							disabled={savingData}
							onClick={() =>
								changeWeight(
									userId, // userId
									type, // routineType
									index, // exerciseIndex
									selectedWeight, // newWeight
									setEdit,
									setSelectedWeight,
									setSavingData
								)
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

const changeWeight = async (
	userId,
	routineType,
	exerciseIndex,
	newWeight,
	setEdit,
	setSelectedWeight,
	setSavingData
) => {
	try {
		setSavingData(true);
		const docRef = doc(exercisesCollectionReference, userId);
		const docSnap = await getDoc(docRef);

		if (!docSnap.exists()) {
			console.warn('Documento no encontrado para el usuario:', userId);
			return;
		}

		const data = docSnap.data();

		if (!data.routine || !data.routine[routineType]) {
			console.warn(`La rutina ${routineType} no existe para este usuario.`);
			return;
		}

		const routineArray = [...data.routine[routineType]];

		if (exerciseIndex < 0 || exerciseIndex >= routineArray.length) {
			console.warn(
				`Índice ${exerciseIndex} fuera de rango para ${routineType}.`
			);
			return;
		}

		routineArray[exerciseIndex].weigth = Number(newWeight);

		await updateDoc(docRef, {
			[`routine.${routineType}`]: routineArray
		});
		setSavingData(false);

		console.log(
			`Peso actualizado a ${newWeight} en ${routineType}[${exerciseIndex}] para el usuario ${userId}`
		);

		setSelectedWeight(null);
		setEdit(false);
	} catch (error) {
		console.error('Error actualizando el peso:', error);
	}
};

export default Routine;
