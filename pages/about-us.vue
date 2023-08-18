<template>
	<div class="main-content learn-more">
		<AboutBlackTrout />
		<AboutTheCraftsman />
		<div class="buttons">
			<nuxt-link to="/FAQ">
				<button>FAQ</button>
			</nuxt-link>
			<nuxt-link to="/request-quote">
				<button class="dark">Request A Quote</button>
			</nuxt-link>
		</div>
	</div>
</template>

<style scoped>
.learn-more {
	padding-top: 5rem;
	gap: 5rem;
}
.buttons {
	width: 80%;
	max-width: 40rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
}

a {
	width: 100%;
}
button {
	width: 100%;
}
</style>
