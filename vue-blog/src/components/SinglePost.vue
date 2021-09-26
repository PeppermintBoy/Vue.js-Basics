<template>
	<div class="post">
		{{ post.title }}
		{{ snippet }}
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
