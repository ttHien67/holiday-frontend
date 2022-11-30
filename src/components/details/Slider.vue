<template>
     <div class="container_content">
         <div class="slider_details" :style="style">
             <div class="slider-content content-section">
                 <div class="slider__title">{{packetLocal.title}}</div>
                 <div class="slider__info">
                     <div class="slider__location">
                         <img src="../../assets/img/details/icon-pin-white.png" alt="" class="slider__location-icon">
                         <h2 class="slider__location-name">{{packetLocal.location}}</h2>
                     </div>
                     <div class="slider__location">
                         <img src="../../assets/img/details/icon-time-white.png" alt="" class="slider__location-icon">
                         <h2 class="slider__location-name">3 - 6 days</h2>
                     </div>
                 </div>
             </div>
         </div>
     </div>
</template>


<script>

    export default {
        props: {
            packet: { type: Object, require: true},
        },
        data() {
            return {
                packetLocal: this.packet
            }
        },
        computed: {
            style () {
                return 'background-image: url(src/assets' + this.packet.img + ');';
            }
        },
    }
</script>


