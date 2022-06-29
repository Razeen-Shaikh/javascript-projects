const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const setDate = () => {
	const now = new Date();

	const seconds = now.getSeconds();
	const secondsDegree = (seconds / 60) * 360 + 90;
	secondHand.style.transform = `rotate(${secondsDegree}deg)`;

	const minutes = now.getMinutes();
	const minutesDegree = (minutes / 60) * 360 + 90;
	minHand.style.transform = `rotate(${minutesDegree}deg)`;

	const hours = now.getHours();
	const hourDegree = (hours / 12) * 360 + 90;
	hourHand.style.transform = `rotate(${hourDegree}deg)`;
};
setInterval(setDate, 1000);

setDate();