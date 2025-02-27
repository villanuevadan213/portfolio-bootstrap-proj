import { createRouter, createWebHistory } from 'vue-router';

// Define components for each section
import Home from './components/AppHome.vue';
import About from './components/AppAbout.vue';
import Contact from './components/AppContact.vue';

// Define routes
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
