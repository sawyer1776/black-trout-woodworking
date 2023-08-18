<template>
	<section>
		<img
			src="/imgs/IMG_3778.webp"
			alt="A picture of the craftsman"
		/>
		<div class="text">
			<div>
				<h3>Custom Quote</h3>
				<p>
					Complete the form below to request a custom quote
					for your project. At Black Trout Woodworking, we
					celebrate individuality. In an online world filled
					with mass-produced pieces, our handcrafted
					creations stand out, embodying your unique touch.
					From dining tables to coffee tables and desks,
					we're dedicated to ensuring each piece mirrors
					your vision perfectly. Choose from a range of
					dimensions, finishes, and design combinations to
					make it distinctively yours. For a custom quote
					tailored to your design aspirations, kindly share
					detailed specifics below, and let's craft your
					dream together.
				</p>
			</div>
		</div>
	</section>
</template>

<style scoped>
section {
	margin-top: 2rem;
	width: 100%;
}

img {
	width: 100%;
	height: auto;
	aspect-ratio: 1/1.1;
	object-fit: cover;
	object-position: center top;
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
		flex-direction: row-reverse;
		width: 70%;
	}
	img {
		width: 40%;
	}
	p {
		font-size: 2.25rem;
	}
	h3 {
		font-size: 4rem;
	}
	.text {
		width: 60%;
		align-items: flex-start;
		padding-right: 4rem;

		gap: 1.25rem;
	}

	.buttons {
		margin-top: 4rem;
	}
	button {
		width: 100%;
	}
}
@media (min-width: 1500px) {
	.text {
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
