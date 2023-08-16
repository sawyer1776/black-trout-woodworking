<template>
	<div class="main-content gallery-main">
		<h1>Gallery</h1>
		<div class="img-grid">
			<nuxt-img
				class="img-thumbnail"
				v-for="(img, index) in imgList"
				@click="currentImg = index + 1"
				:src="`/imgs/${img}`"
				:width="`${screenWidth > 1050 ? 300 : 200}px`"
				:height="`${screenWidth > 1050 ? 300 : 200}px`"
				alt=""
			/>
		</div>
		<div class="modal-container" v-if="currentImg">
			<Icon
				@click="currentImg = null"
				class="icon close"
				name="ep:close-bold"
			/>
			<Icon
				@click="currentImg > 1 ? (currentImg -= 1) : null"
				class="icon left"
				name="ep:arrow-left-bold"
				v-if="screenWidth > 1050"
			/>
			<nuxt-img
				class="modal-img"
				:src="`/imgs/${imgList[currentImg - 1]}`"
				:width="`${screenWidth}px`"
				height="100%"
				alt=""
			/>
			<Icon
				v-if="screenWidth > 1050"
				@click="
					currentImg < imgList.length
						? (currentImg += 1)
						: null
				"
				class="icon right"
				name="ep:arrow-right-bold"
			/>
		</div>

		<p>
			Love what you see? Get in touch to have one of your
			own.
		</p>
		<NuxtLink to="/custom-quote">
			<button class="dark">Request A Quote</button>
		</NuxtLink>
	</div>
</template>

<script>
export default {
	data() {
		return {
			imgList: [
				'custom.jpg',
				'gallery-link.jpg',
				'hero-background.jpg',
				'custom.jpg',
				'profile.jpeg',
				'gallery-link.jpg',
				'logo-transparent.png',
				'profile.jpeg',
				'custom.jpg',
				'gallery-link.jpg',
				'profile.jpeg',
				'custom.jpg',
			],
			currentImg: null,
			screenWidth: 400,
		};
	},
	mounted() {
		this.screenWidth = window.innerWidth;
		console.log(this.screenWidth);
	},
};
</script>

<style scoped>
.gallery-main {
	padding-top: 2rem;
	gap: 1rem;
	padding-bottom: 5rem;
}
.img-grid {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 1rem;
}

.img-thumbnail {
	width: 100%;
	height: 100%;
	aspect-ratio: 1/1;
	object-fit: cover;
	object-position: center top;
	cursor: pointer;
	transition: transform 0.15s ease-out;
}

.img-thumbnail:hover {
	transform: scale(1.02);
}

.modal-container {
	position: fixed;
	top: 0;
	left: 0;
	padding: 0rem;
	width: 100vw;
	height: 101vh;
	background-color: rgba(13, 13, 13, 0.98);
	display: flex;
	justify-content: center;
	align-items: center;
	transition: opacity 0.3s ease-in-out;
	z-index: 1000;
}

.modal-img {
	width: 100%;
	max-width: 1200px;
	height: 90%;
	max-height: 1200px;
	object-fit: contain;
	object-position: center center;
}
.icon {
	color: var(--offwhite);
	position: absolute;
	height: 5rem;
	width: 5rem;

	cursor: pointer;
}

.close {
	top: 1rem;
	right: 2rem;
	height: 2rem;
	width: 2rem;
}

.left {
	top: 50%;
	left: 2rem;
	transform: translateY(-50%);
}
.right {
	top: 50%;
	right: 2rem;
	transform: translateY(-50%);
}

@media (min-width: 1050px) {
	.gallery-main {
		padding-top: 4rem;
		gap: 2rem;
		padding-bottom: 10rem;
	}
	p {
		margin-top: 2rem;
	}
	.close {
		top: 2rem;
		right: 5rem;
		height: 3rem;
		width: 3rem;
	}
	.img-grid {
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 3rem;
	}
}
</style>
