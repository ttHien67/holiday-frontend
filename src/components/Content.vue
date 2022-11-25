
<script>
    import PacketService from '@/services/packet.service.js';

    export default {
        props: {
            packets: { type: Array, default: [] }
        },  
        methods: {
            async retrieveContacts() {
                try {
                    this.packets = await PacketService.getAll();
                }catch(error) {
                    console.log(error);
                }
            },
            refreshList() {
                this.retrieveContacts();
            },
        },
        mounted() {
            this.refreshList();
        }
    }
</script>


<template>
    <div class="content">
    <div class="content-section">

        <div 
            class="packages__list"
            v-for="(packet, index) in packets"
            :key="packet._id"
        
        >
            <div class="col-3 packages__item">
                <div class="packages__item-img">
                    <img src="{{packet.img}}" alt="" class="packages__item-img-pic">
                    <a href="" class="packages__item-img-icon {{packet.colorIcon}}">
                        <img src="{{packet.logo}}" alt="">
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
                            <button class="packages__item-price-btn {{packet.colorBtn}}">+ 1</button>
                        </p>
                        <span class="packages__item-price-money">
                            <span class="packages__item-price-old">{{packet.oldPrice}}</span>
                            {{packet.newPrice}} $
                        </span>
                    </div>
                    <div class="packages__item-description">
                        <p class="packages__item-description-p">{{packet.description}}</p>
                        <a href="/packages/{{packet.slug}}" class="packages__item-description-btn {{packet.colorBtn}}">DETAILS</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>