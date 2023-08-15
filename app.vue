<template>
	<LazyHeaderSection />
	<NuxtPage class="main-content" />
	<FooterSection />
</template>

<style>
:root {
	--offwhite: #fffdf9;
	--dark-grey: #0d0d0d;
	--medium-grey: #303030;
	--light-grey: #e5e4e1;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html {
	font-size: 62.5%;
}

section {
	width: 100%;
}

body {
	background-color: var(--light-grey);
	font-family: 'Alegreya Sans', sans-serif;
	overflow-x: hidden;
	line-height: 1;
	font-weight: 400;
}

a {
	text-decoration: none;
}

a:link,
a:visited,
a:hover,
a:active {
	color: inherit;
}

ul {
	list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-weight: 700;
	font-size: 2.5rem;
}
p {
	font-weight: 400;
	font-size: 1.7rem;
	line-height: 1.5;
	letter-spacing: 0.015rem;
}

button {
	font-weight: 700;
	border: 2px solid var(--dark-grey);
	background-color: var(--offwhite);
	padding: 0.75rem 1.5rem;
	font-size: 2rem;
	font-family: 'Alegreya Sans', sans-serif;
	letter-spacing: 0.05rem;
	transition: all 20ms;
	cursor: pointer;
}

.dark {
	background-color: var(--dark-grey);
	color: var(--offwhite);
	border: 2px solid var(--offwhite);
}

.title {
	font-size: 2.75rem;
	line-height: 1.25;
	padding: 0.75rem 0rem;
	width: fit-content;
	text-transform: uppercase;
	letter-spacing: 0.1rem;
}

.wide {
	width: 100%;
}
.narrow {
	width: fit-content;
}

.main-content {
	background-color: var(--offwhite);
	display: flex;
	color: var(--dark-grey);
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 5rem;
	width: 100vw;
	max-width: 53rem;
	padding: 0.75rem;
	margin: 0 auto;
	box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.1);
}

/* Page Transitions */
.page-enter-active {
	transition: all 0.1s linear;
}
.page-leave-active {
	transition: all 0.1s linear;
}

.page-leave-to {
	transform: translateX(-100%);
}

.page-enter-from {
	transform: translateX(-100%);
}

.page-leave-from,
.page-enter-to {
	transform: translateX(0);
}

@media (min-width: 1050px) {
	.main-content {
		width: 100%;
		max-width: 150rem;

		padding: 8rem;
		padding-top: 0;
		padding-bottom: 20rem;
		gap: 15rem;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-size: 4.5rem;
	}
	p {
		font-size: 3rem;
	}

	button {
		padding: 1rem 1.5rem;
		font-size: 3.25rem;
		border: 3px solid var(--dark-grey);
	}
	.dark {
		border: 3px solid var(--offwhite);
	}
}
</style>
