<template>
	<li @mousedown="isVisible = !isVisible">
		<div>
			<h3>{{ question }}</h3>

			<Icon
				@click="toggleMenu"
				class="icon"
				:name="
					isVisible
						? 'ic:baseline-minus'
						: 'ic:baseline-plus'
				"
			/>
		</div>

		<p v-if="isVisible">{{ answer }}</p>
	</li>
</template>
<script>
export default {
	props: {
		question: String,
		answer: String,
	},
	data() {
		return {
			isVisible: false,
		};
	},
};
</script>

<style scoped>
.icon {
	width: 3rem;
	height: 3rem;
}

h3 {
	width: 100%;
	font-size: 2rem;
}
p {
	font-size: 1.6rem;
}
li {
	display: flex;
	flex-direction: column;
	width: 100%;
}
li:hover {
	cursor: pointer;
}
div {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 0.25rem;
}

@media (min-width: 1050px) {
	p {
		font-size: 2rem;
		margin-top: 2rem;
	}
	h3 {
		font-size: 2.5rem;
	}
}
</style>
