<template>
	<section>
		<img
			src="/imgs/gallery-link.jpg"
			alt="Image of a hand crafted coffee table"
		/>
		<div class="text">
			<h3>Gallery</h3>
			<p>
				View our past work and get inspired for the next
				piece which we can build for you.
			</p>
			<button class="white">
				<NuxtLink to="/gallery">View Gallery</NuxtLink>
			</button>
		</div>
	</section>
</template>

<style scoped>
section {
	width: 100%;
}
img {
	width: 100%;
	height: auto;
	object-fit: cover;
}
h3 {
	margin-top: 1rem;
	font-size: 3rem;
}
p {
	margin-top: 1rem;
}
button {
	margin-top: 1rem;
}

.text {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 0.5rem;
	padding: 1.75rem;
}
@media (min-width: 1050px) {
	section {
		/* border: 3px solid olivedrab; */
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: fit-content;
	}
	img {
		width: 56%;
	}
	.text {
		height: 100%;
		padding: 0rem 7rem 0 7rem;

		gap: 3rem;
	}
	h3 {
		margin-top: 0;
		font-size: 7rem;
	}
	p {
		margin-top: 1rem;
	}
	button {
		margin-top: 7rem;
	}
}
</style>
