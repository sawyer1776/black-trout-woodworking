<template>
	<footer>
		<ul>
			<li>
				<NuxtLink to="learn-more">About</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/request-quote"
					>Request A Quote</NuxtLink
				>
			</li>
			<li>
				<NuxtLink to="gallery">Gallery</NuxtLink>
			</li>
			<li
				class="multi"
				@click="setPhone(), copyText(phoneNumber, 'phone')"
			>
				<p v-if="showAlertPhone" class="alert">Copied</p>
				<Icon class="icon" name="fa:phone" />
				<p v-if="showPhone">{{ phoneNumber }}</p>
			</li>
			<li
				class="multi"
				@click="setEmail(), copyText(emailAddr, 'email')"
			>
				<p v-if="showAlertEmail" class="alert">Copied</p>
				<Icon class="icon" name="fa:envelope" />
				<p class="email" v-if="showEmail">
					{{ emailAddr }}
				</p>
			</li>
			<li>
				<NuxtLink
					to="https://www.instagram.com/blacktroutwoodworking/"
					><Icon class="icon" name="fa:instagram"
				/></NuxtLink>
			</li>
		</ul>
		<p>&copy; 2021 Black Trout Woodworking</p>
	</footer>
</template>
<script>
export default {
	data() {
		return {
			phoneNumber: '',
			showPhone: false,
			emailAddr: '',
			showEmail: false,
			showAlertEmail: false,
			showAlertPhone: false,
		};
	},
	methods: {
		async copyText(mytext, type) {
			try {
				await navigator.clipboard.writeText(mytext);
				if (type === 'email') {
					this.showAlertEmail = true;
					setTimeout(() => {
						this.showAlertEmail = false;
					}, 1000);
				}
				if (type === 'phone') {
					this.showAlertPhone = true;
					setTimeout(() => {
						this.showAlertPhone = false;
					}, 1000);
				}
			} catch ($e) {
				alert('Cannot copy');
			}
		},
		setPhone() {
			this.phoneNumber = '(541) ' + '973-8' + '388';
			this.showPhone = true;
		},
		setEmail() {
			this.emailAddr =
				'Blacktro' +
				'utwoodwo' +
				'rking@' +
				'outlook. ' +
				'com';
			this.showEmail = true;
		},
	},
};
</script>

<style scoped>
footer {
	border-top: 2px solid var(--medium-grey);
	background-color: var(--light-grey);
	color: var(--medium-grey);
	padding: 1rem;
	padding-top: 4rem;
}

ul {
	max-width: 45rem;
	display: flex;
	flex-direction: column;
	gap: 1.75rem;
	margin: 0 auto;
	margin-bottom: 5rem;
}

li {
	padding: 0 0 0.75rem 1rem;
	font-size: 3rem;
	border-bottom: 2px solid var(--medium-grey);
}

li:last-child {
	border-bottom: none;
}

.multi {
	display: flex;
	align-items: center;
	gap: 1rem;
	position: relative;
}

.multi p {
	font-size: 3rem;
}

.multi .email {
	font-size: 1.5rem;
}

p.alert {
	background-color: rgba(0, 0, 0, 0.445);
	color: var(--light-grey);
	padding: 0.25rem 1.5rem;
	border: 1px solid var(--light-grey);
	position: absolute;
	left: 2rem;
	top: -2rem;
	font-size: 1.25rem;
	letter-spacing: 0.1rem;
}
</style>
