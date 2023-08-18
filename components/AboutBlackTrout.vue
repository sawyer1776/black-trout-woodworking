<template>
	<section class="text">
		<div>
			<h3>About Us</h3>
			<p>
				Black Trout Woodworking is an artisan woodworking
				company based in Southern Oregon. Owned and operated
				by craftsman Hiram Koedam, we focus on creating
				furniture using fine live edge slabs and hardwoods,
				all responsibly sourced domestically. We encourage
				custom requests, knowing the uniqueness each
				individual seeks. In today's online furniture
				marketplace, our creations offer a touch of personal
				craftsmanship. Whether it's a dining table, coffee
				table, or desk, we work closely with you to ensure
				the final piece aligns with your vision, selecting
				the right wood and finishes for a harmonious fit in
				your space.
			</p>
		</div>
	</section>
</template>

<style scoped>
section {
	margin-top: 0rem;
	width: 100%;
}

h3 {
	width: 100%;
	margin-bottom: 2rem;
}
.text {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.25rem;
}

button {
	margin-top: 1rem;
	width: 90%;
}
@media (min-width: 1050px) {
	section {
		display: flex;
		flex-direction: row;
		width: 70%;
	}

	p {
		font-size: 2.25rem;
	}
	h3 {
		font-size: 4rem;
	}
	.text {
		align-items: flex-start;

		gap: 1.25rem;
	}

	.buttons {
		margin-top: 4rem;
	}
	button {
		width: 100%;
	}
}
</style>

<!-- <style scoped>
img {
	width: 100%;
	height: auto;
	aspect-ratio: 1/1.1;
	object-fit: cover;
	object-position: center top;
}

section {
	background-color: var(--dark-grey);
	color: var(--offwhite);
	margin-bottom: 10rem;
}

div {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1.75rem;
}

button {
	margin: 1rem;
	width: 80%;
	align-self: center;
}

@media (min-width: 1050px) {
	section {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	div {
		padding: 4rem;
		gap: 2rem;
		padding-top: 2rem;
		/* background-color: red; */
		justify-content: space-between;
	}
	img {
		aspect-ratio: 1/1.5;
	}
	h3 {
		font-size: 3.5rem;
	}
	p {
		font-size: 2.15rem;
	}

	button {
		margin: 3rem;
	}
}
</style> -->
