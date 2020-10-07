
<template>
  <div class="home">
    <div class="navbarr"> <img alt="EKASBON" id="navbar-image" src="../assets/logo.png"></div> 
    
    <button @click="getObject()">GET Object</button>
    {{datas}}
    <p></p>
  </div>
</template>

<script>
// @ is an alias to /src
import Parse from 'parse'
let datas = []
export default {
  name: 'Home',
  data() {
    return {
      datas: datas,
    }
  },
  methods: {
    getObject() {
      let query = new Parse.Query("Users");
      //query.equalTo("Nama_Lengkap", "Adudu");
      query.find().then(
        (result) => {
         console.log('ParseObject detected. Showing result', result);
         this.datas = result;
        },
        (error) => {
          console.log('Error while trying to show ParseObject: ', error);
        }
      );
    }
  }
    
}
</script>

<style scoped>
  .navbarr{
    background-color: seagreen;
  }
</style>