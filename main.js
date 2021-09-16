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
					isFav: true,
				},
				{
					title: 'mobydick',
					author: 'jonathan',
					age: 30,
					img: 'assets/2.jpeg',
					isFav: false,
				},
				{
					title: 'bird is flying',
					author: 'nathan',
					age: 50,
					img: 'assets/3.jpeg',
					isFav: true,
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
		toggleFav(book) {
			book.isFav = !book.isFav;
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
	// comuted is depended on data(), if data() changes so does comouted
	computed: {
		filteredBooks() {
			return this.books.filter(book => book.isFav);
		},
	},
});

app.mount('#app');
