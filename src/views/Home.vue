
<template>
  <div class="home">
    <div class="navbarr"> <img alt="EKASBON" id="navbar-image" src="../assets/logo.png"></div> 
    
    <button @click="getObject()">GET Object</button>
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
    getObject() {
      let query = new Parse.Query("Users");
      //query.equalTo("name", "hilmi");
      query.find().then(
        (result) => {
         console.log('ParseObject detected. Showing result', result);
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