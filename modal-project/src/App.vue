<template>
	<h1>{{ title }}</h1>
	<p>welcome...</p>
	<teleport to=".modals" v-if="showModal">
		<Modal theme="sale" @justCloseIt="toggleModal">
			<template v-slot:links>
				<a href="#">This is a link</a>
				<a href="#">This is a link#2</a>
			</template>

			<h1>This is h1</h1>
			<p>this is a paragraph</p>
		</Modal>
	</teleport>

	<teleport to=".modals" v-if="showModal2">
		<Modal @justCloseIt="toggleModal2">
			<template v-slot:links>
				<a href="#">This is a link from Modal2</a>
				<a href="#">This is a link#2 from Modal2</a>
			</template>

			<h1>This is h2 from Modal2</h1>
			<p>this is a paragraph from Modal2</p>
		</Modal>
	</teleport>

	<!-- click modifier -->
	<button @click.alt="toggleModal">open modal (option + click)</button>
	<br />
	<button @click.shift="toggleModal2">open modal2 (shift + click)</button>
</template>

<script>
import Modal from './components/Modal.vue';

export default {
	name: 'App',
	components: { Modal },
	data() {
		return {
			title: 'my first Vue app',
			customProp: 'this is customProp',
			text: 'this is text',
			showModal: false,
			showModal2: false,
		};
	},
	methods: {
		handleClick() {
			//querySelector of Vue
			console.log(this.$refs.name);
			this.$refs.name.classList.add('active');
			this.$refs.name.focus();
		},
		toggleModal() {
			this.showModal = !this.showModal;
		},
		toggleModal2() {
			this.showModal2 = !this.showModal2;
		},
	},
};
</script>

<style>
#app,
.modals {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
h1 {
	font-family: 'Times New Roman', Times, serif;
}
</style>
