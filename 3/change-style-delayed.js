
const changeStyleDelayed = (id, delay = 0) => {
	const element = document.getElementById(id);

	if (!element) return;

	setTimeout(() => element.style.backgroundColor = 'green', delay);
};
