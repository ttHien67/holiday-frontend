<template>

    <Header></Header>
    <Slider></Slider>
    <Content></Content>
    <Footer></Footer>

</template>

<script>

    import Header from '@/components/Header.vue';
    import Slider from '@/components/Slider.vue';
    import Footer from '@/components/Footer.vue';
    import Content from '@/components/Content.vue';

    export default {
        components: {
            Header,
            Slider,
            Footer,
            Content
        }
    }
</script>