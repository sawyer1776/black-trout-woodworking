<template>
	<section>
		<h1>Welcome To Our Shop</h1>
		<img
			src="imgs/logo-transparent.png"
			alt="logo of a trout"
		/>

		<h2>
			Responsible, hand built custom furniture from southern
			Oregon. Shipped nationwide
		</h2>
		<button class="white">
			<NuxtLink to="/gallery">View Gallery</NuxtLink>
		</button>
		<button class="dark">
			<NuxtLink to="/custom-quote"
				>Request A Quote</NuxtLink
			>
		</button>
	</section>
</template>

<style scoped>
section {
	margin-top: -5rem;
	width: calc(100% + 1.5rem);
	background-image: url('imgs/hero-background.jpg');
	background-size: contain;
	background-position: left top;
	background-repeat: no-repeat;
	padding: 15rem 4.5rem 4rem 4.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
}
img {
	width: 100%;
	max-width: 945px;
}
h1 {
	text-align: center;
}
h2 {
	font-size: 2rem;
	font-weight: 400;
	text-align: center;
}

button,
h2 {
	width: 85%;
}

@media (min-width: 1050px) {
	section {
		width: calc(100% + 16rem);

		/*offset for .main-content in app.vue  */
		background-size: contain;
		background-position: center top -35rem;
		padding: 10rem;
		padding-bottom: 60rem;
		padding-top: 15rem;
		gap: 5rem;
	}

	img {
		width: 40%;
		max-width: 550px;
	}

	h2 {
		font-size: 3.5rem;
	}

	button,
	h2 {
		width: 50%;
	}
}
</style>
