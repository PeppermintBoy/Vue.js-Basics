<template>
	<div class="backdrop">
		<div class="modal" :class="{ sale: theme === 'sale' }">
			<h1>{{ customProp }}</h1>
			<p>{{ text }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: ['customProp', 'text', 'theme'],
};
</script>

<style scoped>
/* scoped using data-attribute to scope css. .h1[data-4145151] */
.modal {
	width: 400px;
	padding: 20px;
	margin: 100px auto;
	background: white;
	border-radius: 10px;
}

.backdrop {
	top: 0;
	position: fixed;
	background: rgba(0, 0, 0, 0.5);
	width: 100%;
	height: 100%;
}

h1 {
	color: turquoise;
	text-shadow: tomato 10px 10px;
}

.sale {
	background: crimson;
	color: white;
}

.sale h1 {
	color: white;
}
</style>
