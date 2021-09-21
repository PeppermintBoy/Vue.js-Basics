import { createRouter, createWebHistory } from 'vue-router';
// where the file is on computer
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Jobs from '../views/Jobs/Jobs.vue';
import JobDetails from '../views/Jobs/JobDetails.vue';

const routes = [
	{
		// defines the URL
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: About,
	},
	{
		path: '/jobs',
		name: 'Jobs',
		component: Jobs,
	},
	{
		// /:id is a route parameter
		path: '/jobs/:id',
		name: 'jobDetails',
		component: JobDetails,
		props: true,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
