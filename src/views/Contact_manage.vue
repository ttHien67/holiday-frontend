<template>
    <div class="container">
    <h1 class="title text-success" style="text-align: center; margin-top:50px">Manage contacts</h1>
    <a href="/#/packet/stored" type="button" class="btn btn-outline-success">Manage Packages</a>

  <table class="table table-hover" style="margin-top: 30px">
    <thead>
      <tr>
        <th>ID</th>
        <th>Surname</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Message</th>
        <th>ID Package</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
        <tr
            v-for="(contact, index) in contacts"
            :key="contact._id"
        >
            <td></td>
            <td>{{contact.surname}}</td>
            <td>{{contact.name}}</td>
            <td>{{contact.email}}</td>
            <td>{{contact.phone}}</td>
            <td>{{contact.message}}</td>
            <td>{{contact.packetId}}</td>
            <td></td>
        </tr>
    </tbody>
  </table>
</div>
</template>

<script>
    import ContactService from '../services/contact.service';
    import "bootstrap/dist/css/bootstrap.min.css";

    export default {  
        data(){
            return {
                contacts: [],
            }
        },
        methods: {
            async retrieveContact() {
                try {
                    this.contacts = await ContactService.getAll();
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
                this.retrieveContact();
            },
        },
        mounted() {
            this.refreshList();
        }
    }
</script>