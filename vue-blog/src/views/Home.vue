<template>
	<div class="home">
		Home
		<p ref="para">My name is {{ name }} and my age is {{ age }}</p>
		<button @click="handleClick">click me</button>
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

		const para = ref(null);

		let name = 'mario';
		let age = 30;

		const handleClick = () => {
			console.log(para);
			console.log(para.value);
			para.value.classList.add('test');
			para.value.textContent = 'hello, homies';
		};

		return { name, age, handleClick, para };
	},
};
</script>
