<template>
	<aside>
		<h3>
			Transform your ideas into timeless wooden artistry.
			Dive into customization with a quote today!
		</h3>
		<button class="dark">
			<NuxtLink to="/request-quote"
				>Request A Quote</NuxtLink
			>
		</button>
	</aside>
</template>

<style scoped>
aside {
	width: 85%;
	/* matching .75rem padding in .main-content on app.vue */
	padding: 1.75rem;
	text-align: center;
	border-top: 1px solid var(--dark-grey);
	border-bottom: 1px solid var(--dark-grey);
}
h3 {
	font-size: 1.75rem;
	font-weight: 500;
	margin-bottom: 2rem;
}
.dark {
	border: none;
}
@media (min-width: 1050px) {
	aside {
		padding: 3rem;

		border-top: 2px solid var(--dark-grey);
		border-bottom: 2px solid var(--dark-grey);
	}
	h3 {
		font-size: 3.5rem;
		font-weight: 500;
		margin-bottom: 5rem;
	}
}
</style>
