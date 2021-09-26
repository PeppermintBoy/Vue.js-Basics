<template>
	<div class="home">
		<h1>home</h1>
		<!-- No need to name.value or age.value for output -->

		<!-- ref vs reactive -->
		<h2>refs</h2>
		<p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
		<button @click="updateNinjaOne">update ninja one</button>

		<h2>reactive</h2>
		<p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
		<button @click="updateNinjaTwo">update ninja two</button>
		<br />

		<!-- computed values -->
		<h2>computed value</h2>
		<input type="text" v-model="search" />
		<p>search: {{ search }}</p>
		<div v-for="name in matchingNames" :key="name">
			{{ name }}
		</div>
		<!-- stop watch -->
		<button @click="handleClick">stop watching</button>

		<!-- Props -->
		<PostList :posts="posts" />
	</div>
</template>

<script>
import PostList from '../components/PostList.vue';
import { ref, reactive, computed } from '@vue/reactivity';
import { watch, watchEffect } from '@vue/runtime-core';
// @ is an alias to /src

export default {
	name: 'Home',
	components: {
		PostList,
	},
	//setup excutes first. even earlier than created()
	//with setup, 'this' does not work. returns undefined
	//$refs will not work without this, so use ref(). automatically imports from vue
	setup() {
		//Ref vs reactive. ref works with primitive value(string) so ref wins.
		const ninjaOne = ref({ name: 'mario', age: 30 });
		const ninjaTwo = reactive({ name: 'luigi', age: 20 });

		const updateNinjaOne = () => {
			ninjaOne.value.age = 40;
		};
		const updateNinjaTwo = () => {
			ninjaTwo.age = 50;
		};

		//computed values
		const search = ref('');
		const names = ref(['mario', 'yoshi', 'peach', 'daisy', 'wario', 'luigi']);

		const matchingNames = computed(() => {
			return names.value.filter(name => name.includes(search.value));
		});

		//watch & watchEffect
		// watch requires you to define what to watch (ex: search)
		const stopWatch = watch(search, () => {
			console.log('watch');
		});
		// watchEffect will watch watever variable is inside
		const stopEffect = watchEffect(() => {
			console.log('watchEffect', search.value);
		});
		const handleClick = () => {
			stopWatch();
			stopEffect();
		};

		//using props in setup()
		const posts = ref([
			{
				title: 'welcome to the club',
				body:
					'Lorem Ipsum well this is me randomly typing words to fill to 100 words. bbecause the lorem ipsum doesnt work. ',
				id: 1,
			},
			{
				title: 'top 5 fighting tips',
				body: 'Lorem Fisitng',
				id: 2,
			},
		]);

		return {
			ninjaOne,
			updateNinjaOne,
			ninjaTwo,
			updateNinjaTwo,
			matchingNames,
			search,
			handleClick,
			posts,
		};
	},
};
</script>
