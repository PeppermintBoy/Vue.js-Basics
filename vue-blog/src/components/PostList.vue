<template>
	<h1>PostList</h1>
	<div class="post-list"></div>
	<div v-for="post in posts" :key="post.id">
		<h3>{{ post.title }}</h3>
		<SinglePost :post="post" />
	</div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core';
import SinglePost from './SinglePost.vue';
export default {
	props: ['posts'],
	components: {
		SinglePost,
	},
	setup(props) {
		onMounted(() => {
			console.log('mounted');
		});
		onUnmounted(() => {
			console.log('unmounted');
		});
		onUpdated(() => {
			console.log('updated');
		});
	},
};
</script>

<style></style>
