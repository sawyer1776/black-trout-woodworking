<template>
	<h1>Gallery</h1>
	<div class="img-grid">
		<nuxt-img
			class="img-thumbnail"
			@click="currentImg = img"
			v-for="img in imgList"
			:src="`/imgs/${img}`"
			width="200px"
			height="200px"
			alt=""
		/>
	</div>
	<div class="modal-container">
		<nuxt-img
			class="modal-img"
			v-if="currentImg"
			:src="`/imgs/${currentImg}`"
			width="1340px"
			height="100%"
			alt=""
			@click="currentImg = null"
		/>
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
		};
	},
};
</script>

<style scoped>
.img-grid {
	display: grid;
	grid-template-columns: 1fr 1fr;

	grid-gap: 2rem;
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
	transform: scale(1.07);
}

.modal-container {
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vw;
	background-color: red;
	/* background-color: rgba(0, 0, 0, 0.8); */
	/* display: flex;
	justify-content: center;
	align-items: center; */
	/* opacity: 0; */
	/* pointer-events: none; */
	/* transition: opacity 0.15s ease-out; */
}
</style>
