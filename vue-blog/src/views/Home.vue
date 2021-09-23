<template>
	<div class="home">
		Home
		<p>My name is {{ name }} and my age is {{ age }}</p>
		<button @click="handleClick">click me</button>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: 'Home',
	//setup excutes first. even earlier than created()
	setup() {
		console.log('setup');

		let name = 'mario';
		let age = 30;

		const handleClick = () => {
			console.log('you clicked me');
		};

		return { name, age, handleClick };
	},
};
</script>
