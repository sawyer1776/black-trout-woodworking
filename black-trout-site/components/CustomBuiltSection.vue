<template>
	<section>
		<img
			src="/imgs/custom.jpg"
			alt="image of a live edge coffee table with black epoxy and a strong burl "
		/>
		<div class="text">
			<div>
				<h3>Custom Built Just For You</h3>
				<p>
					Things are better when they are built with you in
					mind. Let us build something unique that is
					personal to you.
				</p>
			</div>
			<div class="buttons">
				<button>
					<NuxtLink to="/custom-quote"
						>Request A Quote</NuxtLink
					>
				</button>
				<button class="dark">
					<NuxtLink to="/learn-more"
						>Meet The Craftsman</NuxtLink
					>
				</button>
			</div>
		</div>
	</section>
</template>

<style scoped>
section {
	width: 100%;
	background-color: var(--dark-grey);
	color: var(--offwhite);
}
img {
	width: 100%;
	height: auto;
	aspect-ratio: 37/20;
	object-fit: cover;
	object-position: center bottom;
}
h3 {
	width: 100%;
	margin-bottom: 2rem;
}
.text {
	padding: 1.75rem;
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
		margin-top: -55rem;
		display: flex;
		flex-direction: row-reverse;
		width: 100%;
	}
	img {
		width: 56%;
		aspect-ratio: 4/3;
	}
	h3 {
		margin-bottom: 4rem;
	}
	.text {
		padding: 5rem;
		justify-content: space-between;
		align-items: center;

		gap: 1.25rem;
	}

	.buttons {
		margin-top: 4rem;
	}
	button {
		margin-top: 3rem;
		width: 100%;
	}
}
</style>
