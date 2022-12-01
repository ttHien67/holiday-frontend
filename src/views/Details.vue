<template>
    <Slider 
        :packet="packet"
    />
    <Content 
        :packet="packet"
        :contact="contact"
    />
    <Footer />
</template>

<style>
    @import '../assets/details.css';
</style>

<script>
    import Slider from '@/components/details/Slider.vue';
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
    import Content from '@/components/details/Content.vue';
    import PacketService from '../services/packet.service';

    export default {
        components: {
            Slider,
            Content,
            Header,
            Footer
        },
        props: {
            id: {type: String, require: true},
        },
        data() {
            return {
                packet: null,
                contact: {}
            }
        },
        methods: {
            async getPacket(id) {
                try{ 
                    this.packet = await PacketService.get(id);
                }catch (error) {
                    console.log(error);
                }
            },
        },
        created() {
            this.getPacket(this.id);
        }
    }
    
</script>

