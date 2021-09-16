<template>
	<h1>{{ title }}</h1>
	<Modal :customProp="customProp" :text="text" theme="sale" />
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
		};
	},
	methods: {
		handleClick() {
			//querySelector of Vue
			console.log(this.$refs.name);
			this.$refs.name.classList.add('active');
			this.$refs.name.focus();
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
