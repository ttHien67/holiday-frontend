import { createWebHashHistory, createRouter } from "vue-router";
import Packets from "@/components/Packets.vue";

const routes = [
    {
        path: '/',
        name: 'packets',
        component: Packets,
    },
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;