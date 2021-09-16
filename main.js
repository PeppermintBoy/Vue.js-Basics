const app = Vue.createApp({
	data() {
		return {
			url: 'http://www.maplesake.com',
			showBooks: true,

			books: [
				{
					title: 'yoyointheHo',
					author: 'nathan',
					age: 20,
					img: 'assets/1.jpg',
				},
				{
					title: 'mobydick',
					author: 'jonathan',
					age: 30,
					img: 'assets/2.jpeg',
				},
				{
					title: 'bird is flying',
					author: 'nathan',
					age: 50,
					img: 'assets/3.jpeg',
				},
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
