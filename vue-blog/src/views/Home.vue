<template>
	<div class="home">
		Home
		<!-- No need to name.value or age.value for output -->
		<p>My name is {{ name }} and my age is {{ age }}</p>
		<button @click="handleClick">change name to luigi</button>
		<button @click="age++">add 1 to age</button>
		<input type="text" v-model="name" />
	</div>
</template>

<script>
import { ref } from '@vue/reactivity';
// @ is an alias to /src

export default {
	name: 'Home',
	//setup excutes first. even earlier than created()
	//with setup, 'this' does not work. returns undefined
	//$refs will not work without this, so use ref(). automatically imports from vue
	setup() {
		console.log('setup');

		// const para = ref(null);

		//when you wrap variable with ref(), it becomes reactive
		const name = ref('mario');
		const age = ref(30);

		const handleClick = () => {
			name.value = 'luigi';
		};

		return { name, age, handleClick };
	},
};
</script>
