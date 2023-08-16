<template>
	<div class="container">
		<div v-if="formSubmitted" class="submitted-good">
			<h2>Form Submitted!</h2>
			<p>Thank you, we will be in touch soon!</p>
		</div>
		<div v-if="error" class="submitted-error">
			<h2>Error!</h2>
			<p>{{ error }}</p>
		</div>

		<form
			name="custom-quote"
			method="POST"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
			@submit.prevent="submitForm"
		>
			<!-- netlify spam prevention -->
			<input
				type="hidden"
				name="form-name"
				value="contact"
			/>

			<h2>Personal Info</h2>
			<p class="warning" v-if="nameIsValid === 'invalid'">
				Please enter your name.
			</p>
			<input
				v-model.trim="name"
				class="input"
				:class="{
					invalid: nameIsValid === 'invalid',
				}"
				type="text"
				name="name"
				id="name"
				placeholder="Name"
				maxlength="60"
				@blur="validateName"
			/>
			<p class="warning" v-if="emailIsValid === 'invalid'">
				Please enter a valid email
			</p>
			<input
				v-model.trim="email"
				class="input"
				:class="{
					invalid: emailIsValid === 'invalid',
				}"
				type="email"
				name="email"
				id="email"
				placeholder="Email"
				maxlength="254"
				@blur="validateEmail"
				@input="checkToValidateEmail"
			/>
			<p class="warning" v-if="phoneIsValid === 'invalid'">
				Please enter 10 digit phone number.
			</p>
			<input
				@input="formatPhone"
				v-model.trim="phone"
				class="input"
				:class="{
					invalid: phoneIsValid === 'invalid',
				}"
				type="tel"
				name="phone"
				id="phone"
				placeholder="Phone"
				maxlength="14"
				@blur="validatePhone"
			/>
			<fieldset>
				<legend>Preferred method of contact</legend>
				<div class="radio-buttons">
					<div @click="preffered = 'email'">
						<input
							type="radio"
							id="email-radio"
							name="contact-method"
						/>
						<label class="radio-label" for="email-radio"
							>Email</label
						>
					</div>
					<div @click="preffered = 'phone'">
						<input
							type="radio"
							id="phone-radio"
							name="contact-method"
						/>
						<label class="radio-label" for="phone-radio"
							>Phone</label
						>
					</div>
				</div>
			</fieldset>

			<h2>Project Description</h2>

			<textarea
				v-model="description"
				class="input"
				name="description"
				id="description"
				placeholder="Briefly describe the item or project you'd like to have created."
			/>
			<!-- <label for="file"
				>Attach any sketches, pictures, or inspirations (if
				available)</label
			>
			<input
				type="file"
				class="input"
				name="file"
				id="file"
				ref="file"
				@change="handleUpload"
			/> -->
			<label for="dimensions">Dimensions</label>
			<input
				v-model="dimensions"
				class="input"
				type="text"
				name="dimensions"
				id="dimensions"
				placeholder="Include Length, Width, Height, and Units"
				maxlength="350"
			/>
			<label for="materials">Materials Preference</label>
			<input
				v-model="materials"
				class="input"
				type="text"
				name="materials"
				id="materials"
				placeholder="Type of wood (e.g., oak, walnut, maple, etc.)"
				maxlength="100"
			/>
			<input
				v-model="finish"
				class="input"
				type="text"
				name="finish"
				id="finish"
				placeholder="Stain/Finish preferences"
				maxlength="100"
			/>

			<h2>Budget & Timeline</h2>
			<fieldset>
				<legend class="label">
					Do you have a budget for your project
				</legend>
				<div class="radio-buttons">
					<div @click="hasBudget = true">
						<input type="radio" id="yes" name="budget" />
						<label class="radio-label" for="yes">Yes</label>
					</div>
					<div @click="hasBudget = false">
						<input type="radio" id="no" name="budget" />
						<label class="radio-label" for="no">No</label>
					</div>
				</div>
			</fieldset>
			<p
				class="warning"
				v-if="hasBudget && budgetIsValid === 'invalid'"
			>
				Please enter your budget
			</p>
			<div v-if="hasBudget" class="budget">
				<h3>From $</h3>
				<input
					:class="{
						invalid: budgetIsValid === 'invalid',
					}"
					class="input"
					type="number"
					name="budget-low"
					id="budget-low"
					placeholder="0.00"
					maxlength="50"
					v-model="budgetLow"
				/>
				<h3>To $</h3>
				<input
					:class="{
						invalid: budgetIsValid === 'invalid',
					}"
					@blur="validateBudget"
					class="input"
					type="number"
					name="budget-high"
					id="budget-high"
					v-model="budgetHigh"
					placeholder="0.00"
					maxlength="50"
				/>
			</div>
			<label for="timeline">Desired Completion Date:</label>
			<input
				v-model="timeline"
				@focus="validateBudget"
				class="input"
				type="text"
				name="timeline"
				id="timeline"
				placeholder="e.g., 6 weeks, 3 months, etc."
				maxlength="150"
			/>

			<button type="submit" class="dark submit">
				Submit
			</button>
		</form>
	</div>
</template>
<script>
import axios from 'axios';
export default {
	data() {
		return {
			emailAddr: '',
			phoneNumber: '',
			formSubmitted: false,
			file: null,
			error: '',
			name: '',
			email: '',
			phone: '',
			preffered: '',
			description: '',
			dimensions: '',
			materials: '',
			finish: '',
			timeline: '',
			budgetLow: 0.0,
			budgetHigh: 0.0,
			emailIsValid: 'pending',
			phoneIsValid: 'pending',
			nameIsValid: 'pending',
			hasBudget: false,
			budgetIsValid: 'pending',
		};
	},
	methods: {
		encode(data) {
			return Object.keys(data)
				.map(
					(key) =>
						`${encodeURIComponent(
							key
						)}=${encodeURIComponent(data[key])}`
				)
				.join('&');
		},

		submitForm() {
			if (
				this.nameIsValid === 'valid' &&
				this.emailIsValid === 'valid' &&
				this.phoneIsValid === 'valid'
			) {
				const axiosConfig = {
					header: {
						'Content-Type':
							'application/x-www-form-urlencoded',
					},
				};
				try {
					axios.post(
						'/',
						this.encode({
							'form-name': 'custom-quote',
							name: this.name,
							email: this.email,
							phone: this.phone,
							file: this.file,
							contactmethod: this.preffered,
							description: this.description,
							dimensions: this.dimensions,
							materials: this.materials,
							finish: this.finish,
							budget: this.hasBudget,
							budgethigh: this.budgetHigh,
							budgetlow: this.budgetLow,
							timeline: this.timeline,
						}),
						axiosConfig
					);

					this.formSubmitted = true;
				} catch (error) {
					this.error = error;
					console.log(error);
				}

				this.name = '';
				this.file = null;
				this.email = '';
				this.phone = '';
				this.preffered = '';
				this.description = '';
				this.dimensions = '';
				this.materials = '';
				this.finish = '';
				this.timeline = '';
				this.budgetLow = 0.0;
				this.budgetHigh = 0.0;

				this.emailIsValid = 'pending';
				this.phoneIsValid = 'pending';
				this.nameIsValid = 'pending';
				this.hasBudget = false;
				this.budgetIsValid = 'pending';
				scrollTo({
					top: 0,
					behavior: 'smooth',
				});
			} else {
				this.validateName();
				this.validateEmail();
				this.validatePhone();
				scrollTo({
					top: 0,
					behavior: 'smooth',
				});
			}
		},
		validateName() {
			if (this.name.length < 1) {
				this.nameIsValid = 'invalid';
			} else {
				this.nameIsValid = 'valid';
			}
		},
		validateEmail() {
			if (
				/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
					this.email
				)
			) {
				this.emailIsValid = 'valid';
			} else {
				this.emailIsValid = 'invalid';
			}
		},
		validatePhone() {
			if (this.phone.length < 14) {
				this.phoneIsValid = 'invalid';
			} else {
				this.phoneIsValid = 'valid';
			}
		},
		validateBudget() {
			console.log(
				'validating budget',
				this.budgetHigh,
				this.budgetLow
			);
			if (this.budgetLow < 1 || this.budgetHigh < 1) {
				this.budgetIsValid = 'invalid';
			} else {
				this.budgetIsValid = 'valid';
			}
		},
		formatPhone() {
			if (this.phoneIsValid === 'invalid') {
				this.validatePhone();
			}
			const tempNumber = this.phone.replace(/[^\d]/g, '');
			if (tempNumber.length <= 3) {
				this.phone = tempNumber;
			}
			if (tempNumber.length > 3 && tempNumber.length < 7) {
				this.phone =
					'(' +
					tempNumber.slice(0, 3) +
					') ' +
					tempNumber.slice(3);
			}
			if (tempNumber.length >= 7) {
				this.phone =
					'(' +
					tempNumber.slice(0, 3) +
					') ' +
					tempNumber.slice(3, 6) +
					'-' +
					tempNumber.slice(6, 10);
			}
		},
		checkToValidateEmail() {
			if (this.emailIsValid === 'invalid') {
				this.validateEmail();
			}
		},

		handleUpload() {
			console.log(this.$refs.file.files);
			this.file = this.$refs.file.files;
		},
	},
};
</script>
<style scoped>
.container {
	width: 100%;
	max-width: 750px;
}
form {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	width: 100%;
	margin-bottom: 2rem;
	padding: 2rem 1rem;
	border: 2px solid var(--light-grey);
	box-shadow: 1px 2px 14px -1px rgba(0, 0, 0, 0.25);
}

fieldset {
	border: none;
}
.radio-buttons {
	margin-top: 1rem;
	width: 100%;
	display: flex;
	justify-content: center;
	gap: 3rem;
}

.radio-buttons label {
	margin: 1rem;
}

h2 {
	margin-top: 2rem;
	font-size: 2.25rem;
	font-weight: 500;
	width: 100%;
	text-align: center;
}
h3,
legend {
	font-size: 2rem;
	font-weight: 400;
	text-align: center;
}

button {
	font-size: 2rem;
}

.input {
	width: 100%;
	padding: 0.75rem 1.5rem;
	font-size: 1.85rem;
	font-weight: 400;
	font-family: 'Alegreya Sans', sans-serif;
	background-color: var(--offwhite);

	border: 2px solid lightgray;
}

.input:focus {
	outline: none;
	border: 3px solid var(--medium-grey);
}

.icon {
	width: 4rem;
	height: 4rem;
}

.submit {
	padding: 1rem 2rem;
}
#description {
	height: 15rem;
	text-align: left;
	font-family: inherit;
}

#file {
	border: none;

	padding-left: 0;
}

.budget {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 0.25rem;
}

.budget input {
	width: 9rem;
}

.last-btn {
	margin-bottom: -2rem;
	z-index: 1;
}

.phone-number {
	width: 90%;

	font-size: 2rem;
	font-weight: 800;

	padding: 2rem 1rem;
	border-radius: 9px;
	border-top-left-radius: 0px;
	border-top-right-radius: 0px;
}

.warning {
	font-size: 1.5rem;
	font-weight: 400;
}

.invalid.input {
	background-color: rgb(253, 181, 181);
	border: 2px solid rgb(198, 0, 0);
	color: rgb(80, 0, 0);
}

input[type='radio']:checked + label {
	font-weight: 800;
}

label {
	margin-top: 0.5rem;
	margin-bottom: -0.5rem;
	font-size: 2rem;
	font-weight: 400;
	align-self: flex-start;
}

.submitted-good {
	background-color: rgb(213, 253, 213);
	padding: 2rem;
	border: 2px solid green;
	margin-bottom: 1rem;
}

.submitted-good h2 {
	margin-top: 0;
}
.submitted-error {
	background-color: rgb(253, 213, 213);
	padding: 2rem;
	border: 2px solid rgb(179, 0, 0);
	margin-bottom: 1rem;
}

.submitted-error h2 {
	margin-top: 0;
}

#contact {
	height: 8rem;
	margin-top: -8rem;
}

.v-enter-from {
	opacity: 0;
	transform: translateY(-25%);
	height: 0;
	overflow: hidden;
	z-index: -1;
}
.v-enter-active {
	transition: all 0.2s ease-out;
}
.v-enter-to {
	opacity: 1;
	transform: translateY(0);
}

@media (min-width: 850px) {
	form {
		padding: 6rem;
		gap: 2rem;
	}
	.radio-buttons {
		gap: 5rem;
	}
	h2 {
		margin-top: 4rem;
		font-size: 2.75rem;
	}
	h3,
	legend {
		font-size: 2.25rem;
		font-weight: 400;
		text-align: center;
	}
	button {
		font-size: 2.75rem;
	}
	.input {
		font-size: 2.25rem;

		border: 2px solid lightgray;
	}
}
</style>
