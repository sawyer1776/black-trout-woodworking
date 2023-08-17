<template>
	<aside>
		<h3>Ready to commission something great?</h3>
		<button class="dark">
			<NuxtLink to="/request-quote"
				>Request A Quote</NuxtLink
			>
		</button>
	</aside>
</template>

<style scoped>
aside {
	width: calc(100% + 1.5rem);
	/* matching .75rem padding in .main-content on app.vue */
	background-color: var(--light-grey);
	padding: 1.75rem;
	text-align: center;
	border-top: 2px solid var(--dark-grey);
	border-bottom: 2px solid var(--dark-grey);
}
h3 {
	font-size: 2rem;
	font-weight: 600;
	margin-bottom: 2rem;
}
.dark {
	border: none;
}
@media (min-width: 1050px) {
	aside {
		width: calc(100% + 16rem);
		/* matching 8rem padding in .main-content on app.vue */

		padding: 3rem;

		border-top: 3px solid var(--dark-grey);
		border-bottom: 3px solid var(--dark-grey);
	}
	h3 {
		font-size: 5rem;
		font-weight: 500;
		margin-bottom: 5rem;
	}
}
</style>
