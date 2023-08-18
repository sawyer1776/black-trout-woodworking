<template>
	<nav>
		<NuxtLink to="/" @click="showMenu = false">
			<img
				src="/imgs/logo-transparent.png"
				alt="link to home"
			/>
		</NuxtLink>
		<div class="right-side">
			<ul
				:class="showMenu ? '' : 'hidden'"
				@click="toggleMenu"
			>
				<li>
					<NuxtLink to="/#" @click="scrollTop"
						>Home</NuxtLink
					>
				</li>
				<li>
					<NuxtLink to="/request-quote">
						Request A Quote
					</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/gallery">Gallery</NuxtLink>
				</li>
				<li
					class="learn-more"
					@mouseenter="showMore = true"
					@mouseleave="showMore = false"
				>
					<div @click="showMore = !showMore">
						Learn More
					</div>
					<div class="learn-more-links" v-if="showMore">
						<NuxtLink to="/FAQ">FAQ</NuxtLink>
						<NuxtLink to="/about-us">About Us</NuxtLink>
					</div>
				</li>
			</ul>
			<div class="menu-contact">
				<Icon
					@click="toggleMenu(), (showMore = true)"
					class="icon"
					:name="
						showMenu ? 'ep:close-bold' : 'ic:baseline-menu'
					"
				/>
			</div>
		</div>
	</nav>
</template>
<script>
export default {
	data() {
		return {
			showMenu: false,
			showMore: false,
		};
	},

	methods: {
		toggleMenu() {
			if (this.showMenu === true) {
				this.showMenu = false;
			} else {
				this.showMenu = true;
			}
		},
		scrollTop() {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		},
	},
};
</script>

<style scoped>
.learn-more {
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	color: grey;
}
.learn-more a {
	color: var(--offwhite);
	font-size: 2.5rem;
	padding-right: 2rem;
	padding-bottom: 1rem;
}

.learn-more a:last-child {
	border-bottom: none;
}

.learn-more-links {
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	gap: 1rem;
}

nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 1rem;
	width: 100vw;
	height: 7.5rem;
	position: relative;
	position: sticky;
	top: 0;
	z-index: 1000;
	background-color: white;
	/* border-bottom: 2px solid var(--medium-grey); */
}

button {
	font-size: 1.2rem;
	padding: 0.5rem 1rem;
}
button:hover {
	transform: translate(-0.05rem, -0.05rem);
	box-shadow: 0.35rem 0.35rem 0 black;
}

button:active {
	transform: translate(0.3rem, 0.3rem);
	box-shadow: 0 0 0 black;
}

img {
	width: auto;
	height: 6rem;
	object-fit: contain;
}
.icon {
	margin-right: 1rem;
	width: 3.5rem;
	height: 3.5rem;
	cursor: pointer;
	color: var(--dark-grey);
}
.menu-contact {
	display: flex;
	align-items: center;

	gap: 1rem;
}

ul {
	position: absolute;
	top: 7rem;
	right: 0;
	padding: 3rem;
	background-color: var(--dark-grey);
	opacity: 95%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 0rem;
	width: 100vw;
	border-top: 2px solid var(--dark-grey);
}

li {
	text-transform: uppercase;
	font-size: 3rem;
	color: var(--offwhite);
	font-weight: 600;
	width: 100%;
	padding: 1.75rem 0.5rem;
	text-align: right;
	border-bottom: 2px solid var(--offwhite);
}
li:last-child {
	border: none;
}
.right-side {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 1rem;
}

.hidden {
	display: none;
}

@media (min-width: 1050px) {
	.learn-more {
		color: var(--dark-grey);
	}

	.learn-more a {
		border-bottom: 1px solid var(--offwhite);
	}

	.learn-more-links {
		border: 2px solid var(--dark-grey);
		border-top: none;
		position: absolute;
		bottom: -8rem;
		padding: 1rem 1.5rem;
		background-color: rgba(18, 18, 18, 0.79);
	}
	.icon {
		display: none;
	}
	.hidden {
		display: flex;
	}
	ul {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		position: static;
		background-color: transparent;

		width: 100%;
		justify-self: flex-end;

		padding-right: 1rem;
	}

	li {
		font-size: 2.5rem;
		color: var(--brand-brown);
		font-weight: 800;
		width: fit-content;
		padding: 0.5rem 1rem;
		text-align: center;
		border-bottom: none;
		border-right: 2px solid var(--light-grey);
	}
	li:last-child {
		border-bottom: none;
	}
	button {
		margin-right: 1rem;
		font-size: 2rem;
		padding: 0.5rem 1rem;
		box-shadow: 0.3rem 0.3rem 0 var(--dark-brown);
	}
	nav {
		padding: 0.75rem 3rem;
	}
}
</style>
