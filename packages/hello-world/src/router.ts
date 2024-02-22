// Import Vue and the VueRouter libraries
import Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// Import the components that will be used as pages
import HelloWorldVue from './components/HelloWorld.vue';

// Define your routes
const routes = [{ path: '/hello', component: HelloWorldVue, name: 'hello-world' }];

// Create the router instance and pass the `routes` option
const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

// Export the router
export default router;
