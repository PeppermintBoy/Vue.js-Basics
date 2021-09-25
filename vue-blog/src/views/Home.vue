<template>
	<div class="home">
		<h1>home</h1>
		<!-- No need to name.value or age.value for output -->
		<!-- <p>My name is {{ name }} and my age is {{ age }}</p>
		<button @click="handleClick">change name to luigi</button>
		<button @click="age++">add 1 to age</button>
		<input type="text" v-model="name" /> -->
		<h2>refs</h2>
		<p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
		<button @click="updateNinjaOne">update ninja one</button>

		<h2>reactive</h2>
		<p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
		<button @click="updateNinjaTwo">update ninja two</button>
	</div>
</template>

<script>
import { ref, reactive } from '@vue/reactivity';
// @ is an alias to /src

export default {
	name: 'Home',
	//setup excutes first. even earlier than created()
	//with setup, 'this' does not work. returns undefined
	//$refs will not work without this, so use ref(). automatically imports from vue
	setup() {
		// console.log('setup');

		// // const para = ref(null);

		// //when you wrap variable with ref(), it becomes reactive
		// const name = ref('mario');
		// const age = ref(30);

		// const handleClick = () => {
		// 	name.value = 'luigi';
		// };

		const ninjaOne = ref({ name: 'mario', age: 30 });
		const ninjaTwo = reactive({ name: 'luigi', age: 20 });

		const updateNinjaOne = () => {
			ninjaOne.value.age = 40;
		};
		const updateNinjaTwo = () => {
			ninjaTwo.age = 50;
		};
		return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo };
	},
};
</script>
