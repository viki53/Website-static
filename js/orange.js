'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const hero = document.getElementById('hero')
	const footer = document.getElementById('footer')

	const callback = () => {
		hero.classList.toggle('orange')
		footer.classList.toggle('orange')
	}

	hero.addEventListener('click', callback)
	footer.addEventListener('click',callback)
})
