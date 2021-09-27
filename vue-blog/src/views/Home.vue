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

		<!-- Props & lifecycle hooks -->
		<h2>Props & Lifecycle hooks</h2>
		<div v-if="error">{{ error }}</div>
		<div v-if="posts.length">
			<PostList v-if="showPosts" :posts="posts" />
		</div>
		<div v-else>Loading data...</div>
		<button @click="showPosts = !showPosts">Toggle posts</button>
		<button @click="posts.pop()">Delete a post</button>
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

		//using props and fetching data(db.json) in setup()
		const posts = ref([]);
		const error = ref(null);
		const load = async () => {
			//TRY, fail? THROW error, then CATCH the error
			try {
				let data = await fetch('http://localhost:3000/posts');
				if (!data.ok) {
					throw Error('no data available');
				}
				posts.value = await data.json();
			} catch (err) {
				error.value = err.message;
			}
		};
		load();
		//Lifecycles
		const showPosts = ref(true);

		return {
			ninjaOne,
			updateNinjaOne,
			ninjaTwo,
			updateNinjaTwo,
			matchingNames,
			search,
			handleClick,
			posts,
			error,
			showPosts,
		};
	},
};
</script>
