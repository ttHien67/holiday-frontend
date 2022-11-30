import { createWebHashHistory, createRouter } from "vue-router";
import Packets from "@/views/Home.vue";

const routes = [
    
    {
        path: '/',
        name: 'packets',
        component: Packets,
    },
    {
        path: '/packet/:id',
        name: 'packet.details',
        component: () => import("@/views/Details.vue"),
        props: true
    },
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;