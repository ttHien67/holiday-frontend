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
    {
        path: '/packet/stored',
        name: 'packet.stored',
        component: () => import("@/views/Packet_manage.vue"),
        props: true
    },
    {
        path: '/packet/edit/:id',
        name: 'packet.edit',
        component: () => import("@/views/Packet_edit.vue"),
        props: true

    },
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;