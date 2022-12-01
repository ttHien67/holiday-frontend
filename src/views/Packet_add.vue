<template>
    <div class="container" >
        <h1 class="title text-success" style="text-align: center; margin:50px;">Add Packet</h1>

        <a href="/#/packet/stored" type="button" 
            class="btn btn-outline-success"
            style="text-align: center; margin-bottom:50px;"
        >Manage Packages</a>


        <form @submit="createPacket(packet)">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Image</span>
                </div>
                <input type="text" class="form-control" name="img" v-model="packet.img">
            </div>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Image Icon</span>
                </div>
                <input type="text" class="form-control" name="icon" v-model="packet.logo">
            </div>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Title</span>
                </div>
                <input type="text" class="form-control" name="title" v-model="packet.title">
            </div>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Location</span>
                </div>
                <input type="text" class="form-control" name="location" v-model="packet.location" >
            </div>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Type</span>
                </div>
                <input type="text" class="form-control" name="type" v-model="packet.type">
            </div>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Old Price</span>
                </div>
                <input type="text" class="form-control" name="oldPrice" v-model="packet.oldPrice">
            </div>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">New Price</span>
                </div>
                <input type="text" class="form-control" name="newPrice" v-model="packet.newPrice">
            </div>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Description</span>
                </div>
                <textarea class="form-control" name="description" v-model="packet.description">{{packet.description}}</textarea>
            </div>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Color Button</span>
                </div>
                <input type="text" class="form-control" name="colorBtn" v-model="packet.colorBtn">
            </div>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Color Icon</span>
                </div>
                <input type="text" class="form-control" name="colorIcon" v-model="packet.colorIcon">
            </div>
            <button type="submit" class="btn btn-primary">
                Add
            </button>
        </form>
    </div>
</template>

<script>
    import PacketService from '../services/packet.service';
    import "bootstrap/dist/css/bootstrap.min.css";

    export default {
        props: {
            id: {type: String, require: true},
        },
        data() {
            return {
                packet: {},
            }
        },
        methods: {
            async createPacket (data) {
                try {
                    await PacketService.create(data);
                }catch(error) {
                    console.log(error);
                }
            },
        }
    }
    
</script>