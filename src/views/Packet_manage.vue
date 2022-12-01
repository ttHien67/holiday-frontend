<template>
    
    <div style="margin: 0 20px">
        <h1 class="title text-success" style="text-align: center; margin-top:50px">Manage Packets</h1>

        <div class="d-flex justify-content-between">
        <a href="/#/packet/add" type="button" class="btn btn-outline-primary" 
            style="margin-left: 50px; min-width: 100px">
            Add
        </a>
        </div>

    <table class="table table-hover" style="margin-top: 30px">
        <thead>
        <tr>
            <th>No</th>
            <th>Images</th>
            <th>Icons</th>
            <th>Titles</th>
            <th>Locations</th>
            <th>Types</th>
            <th>Old Price</th>
            <th>New Price</th>
            <th>Descriptions</th>
            <th>Color Buttons</th>
            <th>Color Icons</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
            
        <tr
            v-for="(packet, index) in packets"
            :key="packet._id"
        >
            <td></td>
            <td><img :src="'src/assets' + packet.img" alt="" style="width: 100px"></td>
            <td style="background-color: #000;">
                <img :src="('src/assets' + packet.logo)" alt="" style="width: 100px">
            </td>
            <td>{{packet.title}}</td>
            <td>{{packet.location}}</td>
            <td>{{packet.type}}</td>
            <td>{{packet.oldPrice}}</td>
            <td>{{packet.newPrice}}</td>
            <td>{{packet.description}}</td>
            <td>{{packet.colorBtn}}</td>
            <td>{{packet.colorIcon}}</td>
            <td>
                <a href="" class="btn btn-outline-danger" style="margin-bottom: 10px"
                    @click="deletePacket(packet._id)"    
                >
                    Delete
                </a>
                
            </td>
            <td>
                <router-link
                    :to="{
                        name: 'packet.edit',
                        params: { id: packet._id}
                    }"
                >
                    <button class="btn btn-outline-warning">Edit</button>
                </router-link>
            </td>

            
        </tr>

            <!-- <td colspan="11">
                <h2>You don't have any packets. Add packet now <a href="create">In here</a></h2>
            </td> -->

        </tbody>
    </table>

    </div>

    <form action="" id="form-delete-packet" method="POST"></form>

    <div class="modal" tabindex="-1" role="dialog" id="confirm-delete-modal">
    
    </div>

</template>

<style>
    
</style>


<script>
    import PacketService from '../services/packet.service';
    import "bootstrap/dist/css/bootstrap.min.css";

    export default {  
        props: {
            src: {type: String, default: ''},
            class: { type: String, default: ''},
        },
        data(){
            return {
                packets: [],
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

            async deletePacket(id) {
                try {
                    await PacketService.delete(id);
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