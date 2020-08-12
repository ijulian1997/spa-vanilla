const home = () => {
	const view = `
		<div class="characters">
			<article class="character-item">
				<a href="#/1/">
					<img src="image" alt="name">
					<h2>Name</h2>
				</a>
			</article>
		</div>
	`
	return view;
}

// This allows that this file to be used in other files
export default home;