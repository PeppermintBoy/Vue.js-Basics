<template>
	<p class="results">Your score: {{ result }} ms</p>
	<p class="rank">{{ rank }}</p>
</template>

<script>
export default {
	props: ['result'],
	data() {
		return {
			rank: null,
		};
	},
	mounted() {
		if (this.result < 250) {
			this.rank = 'Holy cow, you are fast';
		} else if (this.result < 400) {
			this.rank = 'Man, you are fast but not quite there yet';
		} else {
			this.rank = 'snail pace...';
		}
	},
};
</script>

<style>
.results {
	font-size: 30px;
	font-family: cursive;
}
.rank {
	font-size: 30px;
	color: turquoise;
	font-weight: bold;
}
</style>
