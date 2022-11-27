import { createWebHashHistory, createRouter } from "vue-router";
import Packets from "@/components/Packets.vue";
import Details from "@/components/details/Details.vue";

const routes = [
    {
        path: '/',
        name: 'packets',
        component: Packets,
    },
    {
        path: '/packet/:id',
        name: 'details',
        component: Details,
        props: true
    },
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;