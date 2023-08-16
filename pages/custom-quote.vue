<template>
	<main class="main-content">
		<div class="text">
			<h1>Request Something Custom</h1>
			<p>
				Fill out the form below to request a custom quote
				for your project. We will get back to you as soon as
				possible.
			</p>
		</div>
		<QuoteForm />
	</main>
</template>

<style scoped>
.text {
	margin-top: 2rem;
	width: 90%;
	max-width: 750px;
	color: var(--dark-grey);
	background-color: var(--light-grey);
	padding: 2rem;
	border: 2px solid var(--dark-grey);
}
h1 {
	text-align: center;

	margin-bottom: 1rem;
}
</style>
