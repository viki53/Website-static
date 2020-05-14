'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const hero = document.getElementById('hero')

	hero.addEventListener('click', () => {
		hero.classList.toggle('orange')
	})
})
