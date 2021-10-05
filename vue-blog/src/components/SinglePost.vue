<template>
	<!-- basically <a href> -->
	<router-link :to="{ name: 'Details', params: { id: post.id } }">
		<h3>{{ post.title }}</h3>
	</router-link>
	<div class="post">
		{{ snippet }}
		<div v-for="tag in post.tags" :key="tag">
			<span>#{{ tag }}</span>
		</div>
	</div>
</template>

<script>
import { computed } from '@vue/reactivity';

export default {
	//how to pass props value to setup()
	props: ['post'],
	setup(props) {
		const snippet = computed(() => {
			return props.post.body.substring(0, 100) + '...';
		});
		return { snippet };
	},
};
</script>

<style></style>
