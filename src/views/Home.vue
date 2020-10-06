
<template>
  <div class="home">
    <div class="navbarr"> <img alt="EKASBON" id="navbar-image" src="../assets/logo.png"></div> 
    <button @click="createObject()">Create Object</button>
    <a href="javascript:void(0)" @click="getObject">GET OBJ</a>
  </div>
</template>

<script>
// @ is an alias to /src
import Parse from 'parse'

export default {
  name: 'Home',
  data() {
    return {

    }
  },
  methods: {
    createObject() {
      const Anggota = Parse.Object.extend('Anggota');
      const anggota = new Anggota();

      anggota.set('name', 'aaa');
      anggota.set('age', 19);

      anggota.save().then(
        (result) => {
         console.log('ParseObject created', result);
        },
        (error) => {
          console.error('Error while creating ParseObject: ', error);
        }
      );
    },
    getObject() {
      console.log('get now')
      // const Anggota = Parse.Object.extend('Anggota');
      let query = Parse.Query("Anggota");

      //query.equalTo("name", "hilmi");
      query.find().then(
        (result) => {
         console.log('ParseObject created', result);
        },
        (error) => {
          console.log('Error while creating ParseObject: ', error);
        }
      );
    },
  },
    
}
</script>

<style scoped>
  .navbarr{
    background-color: seagreen;
  }
</style>