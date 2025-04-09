import { DAYS } from '../../constants/days';

const getDateOfWeekday = (baseDate, targetDayIndex) => {
	const currentDayIndex = baseDate.getDay();
	const diff = targetDayIndex - currentDayIndex;
	const newDate = new Date(baseDate);
	newDate.setDate(baseDate.getDate() + diff);
	return newDate;
};

const SelectDay = () => {
	const date = new Date();

	return (
		<>
			{DAYS.map((day, index) => {
				const dayDate = getDateOfWeekday(date, index);
				const isToday = dayDate.toDateString() === date.toDateString();

				return (
					<div key={day}>
						<div
							style={{
								fontWeight: isToday ? 'bold' : 'normal',
								cursor: 'pointer'
							}}
							onClick={() => formatDate(dayDate)}
						>
							{day} - {dayDate.getDate()}
						</div>
					</div>
				);
			})}
		</>
	);
};

const formatDate = date => {
	const day = String(date.getDate()).padStart(2, '0');
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const year = date.getFullYear();
	console.log(`${day}/${month}/${year}`);
};

export default SelectDay;
