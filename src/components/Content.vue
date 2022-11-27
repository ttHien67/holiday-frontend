
<script>
    import PacketService from '../services/packet.service';

    export default {  
        props: {
            src: {type: String, default: ''},
            class: { type: String, default: ''}
        },
        data(){
            return {
                packets: []
            }
        },
        emits: ["update:activeIndex"],
        methods: {
            updateIndex(index){
                this.$emit("update:activeIndex", index)
            },
            async retrievePacket() {
                try {
                    this.packets = await PacketService.getAll();
                }catch(error){
                    console.log(error);
                }
            },

            refreshList(){
                this.retrievePacket();
            },

            goToDetails() {
                this.$route.push({name: 'details'});
            }
        },
        mounted() {
            this.refreshList();
        }
    }
</script>


<template>
    <div class="content">
    <div class="content-section">
        <div class="packages__list" >
            <div class="col-3 packages__item"
                v-for="(packet, index) in packets"
                :key="packet._id"
            >
                <div class="packages__item-img">
                    <img :src="'src/assets' + packet.img" alt="" class="packages__item-img-pic">
                    <a href="" class="packages__item-img-icon" :class="(packet.colorBtn)">
                        <img :src="'src/assets' + packet.logo" alt="">
                    </a>
                </div>
                <div class="packages__item-content">
                    <div class="packages__item-destination">
                        <h1 class="packages__item-destination-name">{{packet.title}}</h1>
                        <p class="packages__item-destination-place">
                            <i class="ti ti ti-location-pin"></i>
                            {{packet.location}}
                        </p>
                    </div>
                    <div class="packages__item-price">
                        <p class="packages__item-price-name">
                            {{packet.type}}
                            <button class="packages__item-price-btn" :class="(packet.colorBtn)">+ 1</button>
                        </p>
                        <span class="packages__item-price-money">
                            <span class="packages__item-price-old">{{packet.oldPrice}}</span>
                            {{packet.newPrice}} $
                        </span>
                    </div>
                    <div class="packages__item-description">
                        <p class="packages__item-description-p">{{packet.description}}</p>
                            <a :href="'/packet/' + packet._id"  
                                class="packages__item-description-btn"
                                :class="(packet.colorBtn)"
                            >DETAILS</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>