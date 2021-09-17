<template>
	<h1>{{ title }}</h1>
	<p>welcome...</p>
	<div v-if="showModal">
		<Modal
			:customProp="customProp"
			:text="text"
			theme="sale"
			@justCloseIt="toggleModal"
		/>
	</div>
	<!-- click modifier -->
	<button @click.alt="toggleModal">open modal (hold option)</button>
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
	},
};
</script>

<style>
#app {
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
