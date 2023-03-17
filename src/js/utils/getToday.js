export const getToday = () => {
	const todayDate = new Date();
	const year = todayDate.getFullYear();
	const month = todayDate.getMonth() + 1;
	const date = todayDate.getDate();

	return { year, month, date };
};
