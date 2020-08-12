import getData from '../utils/getData';

const home = async () => {
	const characters = await getData();

	const view = `
		<div class="characters">
			${characters.results.map(character => `
				<article class="character-item">
					<a href="#/${character.id}/">
						<img src="${character.image}" alt="${character.name}">
						<h2>${character.name}</h2>
					</a>
				</article>
			`).join('')}
		</div>
	`;
	return view;
}

// This allows that this file to be used in other files
export default home;