const app = Vue.createApp({
	data() {
		return {
			showBooks: true,
			title: 'yoyo and the ho',
			author: 'yoyo',
			age: 12,
		};
	},

	methods: {
		// changeTitle() {
		// 	this.title = 'Words of Randiance';
		// },
		toggleShowBooks() {
			this.showBooks = !this.showBooks;
		},
	},
});

app.mount('#app');
