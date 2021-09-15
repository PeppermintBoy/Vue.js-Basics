const app = Vue.createApp({
	data() {
		return {
			showBooks: true,

			books: [
				{ title: 'yoyo', author: 'nathan', age: 20 },
				{ title: 'mobydick', author: 'jonathan', age: 30 },
				{ title: 'bird is flying', author: 'nathan', age: 50 },
			],
			x: 0,
			y: 0,
		};
	},

	methods: {
		// changeTitle() {
		// 	this.title = 'Words of Randiance';
		// },
		toggleShowBooks() {
			this.showBooks = !this.showBooks;
		},
		handleEvent(e, data) {
			console.log(e, e.type);
			if (data) {
				console.log(data);
			}
		},
		handleMousemove(e) {
			this.x = e.offsetX;
			this.y = e.offsetY;
		},
	},
});

app.mount('#app');
