<template>
	<!-- click.self will only excute the subj div, not child divs -->
	<div class="backdrop" @click.self="closeModal">
		<div class="modal" :class="{ sale: theme === 'sale' }">
			<slot>this message will only show if there is no default slot</slot>
			<div class="actions">
				<slot name="links"></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['theme'],
	methods: {
		closeModal() {
			this.$emit('justCloseIt');
		},
	},
};
</script>

<style>
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

.modal h1 {
	color: turquoise;
	text-shadow: tomato 10px 10px;
}

.modal .actions {
	text-align: center;
	margin: 30px 0 10px 0;
}
.modal .actions a {
	color: #333;
	padding: 8px;
	border: 1px solid #eee;
	border-radius: 4px;
	text-decoration: none;
	margin: 10px;
}
.modal.sale {
	background: crimson;
	color: white;
}

.modal.sale h1 {
	color: white;
}

.modal.sale .actions {
	color: white;
}

.modal.sale .actions a {
	color: white;
}
</style>
