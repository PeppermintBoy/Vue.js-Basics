<template>
	<h1>Job details page</h1>
	<!-- calls the parameter of current route. (doesnt need to be "id") -->
	<p>The job id is {{ id }}</p>
</template>

<script>
export default {
	props: ['id'],
	// data() {
	// 	return {
	// 		id: this.$route.params.id,
	// 	};
	// },
};
</script>

<style></style>
