<template>
	<section>
		<article>
			<img
				src="/imgs/profile.jpeg"
				alt="A picture of the craftsman"
			/>
			<div class="text">
				<div>
					<h3>Meet The Craftsman</h3>
					<p>
						Hello, I'm Hiram, the passion and precision
						behind Black Trout Woodworking. My story is
						deeply rooted in Klamath, California, where I
						grew up surrounded by some of the world's most
						imposing trees. Their towering presence always
						evoked a sense of wonder in me, each ring
						representing a chapter of history, silently
						narrating tales of time gone by.
					</p>
					<p>
						My journey started when an old-growth maple met
						its end on my mother's 5-acre property in
						Klamath. While most saw firewood, I saw pages of
						an unwritten book. Instead of letting its tales
						turn to ashes, I decided to honor its legacy,
						crafting my first live edge river epoxy desk. It
						wasn't merely a piece of furniture; it was a
						tribute to nature's chronicles and the Maple's
						storied existence.
					</p>
				</div>
			</div>
		</article>
		<p>
			When I relocated to Southern Oregon, what began as a
			deeply personal project quickly transformed into Black
			Trout Woodworking, resonating with those who sought
			furniture with soul. From dining tables to coffee
			tables and desks, every piece I create is a testament
			to the wood's original charm and essence. Each piece
			is not just unique but also a poignant reminder of
			nature's enduring artistry. At Black Trout
			Woodworking, we craft not just furniture, but
			legacies. Let's join hands and shape yours.
		</p>
	</section>
</template>

<style scoped>
section {
	width: 100%;
}
article {
	margin-top: 2rem;
	width: 100%;
}

img {
	width: 100%;
	height: auto;
	aspect-ratio: 1/1.1;
	object-fit: cover;
	object-position: center top;
}
h3 {
	width: 100%;
	margin-bottom: 1rem;
	margin-top: 1rem;
}
p {
	margin-top: 1rem;
}
.text {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.25rem;
}

button {
	margin-top: 1rem;
	width: 90%;
}
@media (min-width: 1050px) {
	section {
		width: 70%;
	}
	article {
		display: flex;
		flex-direction: row-reverse;
		width: 100%;
	}

	img {
		width: 40%;
	}
	p {
		font-size: 2rem;
	}
	h3 {
		font-size: 3rem;
	}
	.text {
		width: 60%;
		align-items: flex-start;
		padding-right: 4rem;

		gap: 1.25rem;
	}

	.buttons {
		margin-top: 4rem;
	}
	button {
		width: 100%;
	}
}
@media (min-width: 1500px) {
	.text {
	}
}
</style>

<!-- <style scoped>
img {
	width: 100%;
	height: auto;
	aspect-ratio: 1/1.1;
	object-fit: cover;
	object-position: center top;
}

section {
	background-color: var(--dark-grey);
	color: var(--offwhite);
	margin-bottom: 10rem;
}

div {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1.75rem;
}

button {
	margin: 1rem;
	width: 80%;
	align-self: center;
}

@media (min-width: 1050px) {
	section {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	div {
		padding: 4rem;
		gap: 2rem;
		padding-top: 2rem;
		/* background-color: red; */
		justify-content: space-between;
	}
	img {
		aspect-ratio: 1/1.5;
	}
	h3 {
		font-size: 3.5rem;
	}
	p {
		font-size: 2.15rem;
	}

	button {
		margin: 3rem;
	}
}
</style> -->
