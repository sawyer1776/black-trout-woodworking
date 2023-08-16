<template>
	<img
		v-if="img"
		:src="`/public/imgs/${props.img}`"
		alt="test"
	/>
</template>

<script>
export default {
	props: {
		img: {
			type: String,
		},
	},
};
</script>
