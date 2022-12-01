<template>
    <Slider></Slider>
    <Content></Content>
    <Footer />

</template>

<style> 
    
    
</style>
<script>

    import Slider from '@/components/Slider.vue';
    import Content from '@/components/Content.vue';
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';

    export default {
        components: {
            Slider,
            Content,
            Header,
            Footer
        }
    }
</script>