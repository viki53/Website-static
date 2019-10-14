'use strict';

const heroOpacityProp = '--opacity-hero';

document.addEventListener('DOMContentLoaded', () => {
	const hero = document.getElementById('hero');

	hero.addEventListener('mousemove', (event) => {
		const center = {
			x: hero.offsetWidth / 2,
			y: hero.offsetHeight / 2
		}

		const maxDist = Math.sqrt(Math.pow(center.x, 2) + Math.pow(center.y, 2));

		const distance = Math.sqrt(Math.pow(Math.abs(center.x - event.x), 2) + Math.pow(Math.abs(center.y - event.y), 2));

		hero.style.setProperty(heroOpacityProp, 0.75 + ((distance / maxDist) / 4));
	})

	hero.addEventListener('click', () => {
		hero.classList.toggle('orange');
	})
})
