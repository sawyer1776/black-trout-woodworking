<template>
	<main class="main-content">
		<section>
			<h2 class="section-title">FAQ</h2>
			<ul class="faqs">
				<FaQuestion
					v-for="(faq, index) in faqs"
					:key="index"
					:question="faq.question"
					:answer="faq.answer"
				/>
			</ul>
			<div class="buttons">
				<button>
					<NuxtLink to="/about-us"> About Us </NuxtLink>
				</button>
				<button class="dark">
					<NuxtLink to="/request-quote">
						Request A Quote
					</NuxtLink>
				</button>
			</div>
		</section>
	</main>
</template>

<script>
export default {
	data() {
		return {
			faqs: [
				{
					question:
						'Can I customize my table design with unique objects or colors in the epoxy?',
					answer:
						'Absolutely! We can embed objects or use colored pigments in the epoxy to create a truly personalized table.',
				},
				{
					question:
						'What types of wood do you use for the tables?',
					answer:
						'We source a variety of hardwoods, including oak, walnut, and maple. Our choice of wood depends on the design and customer preferences.',
				},
				{
					question:
						'How long does it take to make a custom table?',
					answer:
						'Production times vary depending on design complexity, but typically, a custom table can take 4-6 weeks from design confirmation to completion.',
				},
				{
					question: 'What is a "river table"?',
					answer:
						'A river table is a type of table where epoxy resin is used to simulate a river flowing between two pieces of wood. The design is inspired by natural landscapes and can be enhanced with colors, embedded objects, or even LED lights.',
				},

				{
					question: 'How much does a custom table cost?',
					answer:
						'Pricing varies based on size, wood type, design complexity, and additional features. Please contact us for a specific quote.',
				},
				{
					question:
						'How do I maintain a table with a regular finish?',
					answer:
						'Dust regularly with a soft cloth. For cleaning, use a damp cloth with mild soap, avoiding strong chemicals. Depending on the type of finish, periodic re-coating or polishing might be required to maintain its appearance.',
				},
				{
					question:
						'Can I request a combination of epoxy and regular finish on a table?',
					answer:
						"Yes, it's possible to combine both finishes on a single table, depending on the design. For instance, some parts of the table might have an epoxy finish, while others have a regular finish.",
				},
			],
		};
	},
};
</script>

<style scoped>
section {
	width: 100%;
	max-width: 80rem;
	margin-bottom: 6rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	justify-content: center;
	align-items: center;
}
h2 {
	width: 100%;
	text-align: center;
	margin-bottom: 2rem;
	margin-top: 2rem;
}
.faqs {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

li {
	border-bottom: 2px solid var(--light-grey);
}
.buttons {
	margin-top: 1rem;
	width: 80%;
	max-width: 40rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
}

a {
	width: 100%;
}
button {
	width: 100%;
}

@media (min-width: 1050px) {
	li {
		padding: 2rem 2rem;
	}
	.faqs {
		gap: 0rem;
	}
}
</style>
