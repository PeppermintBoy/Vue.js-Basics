import { createRouter, createWebHistory } from 'vue-router';
// where the file is on computer
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Jobs from '../views/Jobs/Jobs.vue';
import JobDetails from '../views/Jobs/JobDetails.vue';
import NotFound404 from '../views/NotFound404.vue';

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
	//redirect from
	{
		path: '/all-jobs',
		redirect: '/jobs',
	},
	//404 all non existing router
	{
		path: '/:catchAll(.*)',
		name: 'NotFound404',
		component: NotFound404,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
