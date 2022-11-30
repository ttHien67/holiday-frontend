<template>
    <div class="content content-section">
        <div class="introduce col-lg-8">
            <div class="introduce__type">
                <div class="introduce__type-item">
                    <img src="../../assets/img/details/icon-typologies-greydark.png" alt="" class="introduce__type-img">
                    <div class="introduce__type-info">
                        <h1 class="introduce__type-name">TYPOLOGIES</h1>
                        <h3 class="introduce__type-"> {{packetLocal.type}}</h3>
                    </div>
                </div>
                <div class="introduce__type-item">
                    <img src="../../assets/img/details/icon-battery-greydark.png" alt="" class="introduce__type-img">
                    <div class="introduce__type-info">
                        <h1 class="introduce__type-name">DIFFICULTY</h1>
                        <h3 class="introduce__type-">Medium</h3>
                    </div>
                </div>
                <div class="introduce__type-item">
                    <img src="../../assets/img/details/icon-minage-greydark.png" alt="" class="introduce__type-img">
                    <div class="introduce__type-info">
                        <h1 class="introduce__type-name">MIN. AGE</h1>
                        <h3 class="introduce__type-">3 years</h3>
                    </div>
                </div>
            </div>
            <img :src="'src/assets' + (packetLocal.img)" alt="" class="introduce__img">
            <div class="introduce__list">
                <ul class="introduce__list-title">
                    <li><a href="" class="introduce__list-item" :class="packetLocal.colorBtn">Description</a></li>
                    <li><a href="" class="introduce__list-item">Map</a></li>
                    <li><a href="" class="introduce__list-item">Photo</a></li>
                    <li><a href="" class="introduce__list-item">Program</a></li>
                </ul>
            </div>
            <div class="introduce__type-content">
                <h1 class="introduce__content-name">Amazing Experience</h1>
                <div class="space"></div>
                <p class="introduce__content-pag">
                    {{packetLocal.description}}
                </p>

            </div>
        </div>
        <div class="feedback-section col-lg-4">
            <div class="feedback__name" :class="packetLocal.colorBtn"> {{packetLocal.newPrice}}</div>

            <form @submit="createContact(contactLocal)" class="feedback__input">
                <div class="feedback__input-container" :contact="contactLocal">
                    <input type="text" class="feedback__input-info" placeholder="Surname" v-model="contactLocal.surname">
                    <input type="text" class="feedback__input-info" placeholder="Name" v-model="contactLocal.name">
                    <input type="email" placeholder="Email"  class="feedback__input-info" v-model="contactLocal.email">
                    <input type="text" placeholder="Phone" class="feedback__input-info" v-model="contactLocal.phone">
                    <input type="text" hidden v-model="packetLocal._id">
                    <textarea id="" cols="30" rows="10" placeholder="Message" class="feedback__input-info" 
                        v-model="contactLocal.message"></textarea>
                </div>
                <button class="feedback__input-btn" 
                    :class="packetLocal.colorBtn"
                    type="submit"    
                >Send now</button>
            </form>
        </div>
    </div>
</template>

<script>
    import ContactService from '../../services/contact.service';

    export default {
        props: {
            packet: { type: Object, require: true},
            contact: { type: Object, require: true }
        },
        data() {
            return {
                packetLocal: this.packet,
                contactLocal: this.contact
            }
        },
        methods:{
            async createContact (data) {
                try {
                    await ContactService.create(data);
                }catch(error) {
                    console.log(error);
                }
            },
        },
    }
</script>