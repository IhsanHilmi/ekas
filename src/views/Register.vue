<template>
  <div class="register">
    <h1>Registrasi E-Kasbon</h1>
    <form action="#">
      <label for="In_Nama_Lengkap">Nama Lengkap</label><br>
      <input type="text" v-model="store.In_Nama_Lengkap" id="In_Nama_Lengkap" placeholder="Nama Lengkap"><br><br>
      
      <label for="In_Nomor_Absensi">Nomor Absensi Bank Kalsel</label><br>
      <input type="text" v-model="store.In_Nomor_Absensi" id="In_Nomor_Absensi" placeholder="Nomor Absensi Bank Kalsel"><br><br>
      
      <label for="In_Nomor_Handphone">Nomor Handphone</label><br>
      <div class="input-group-text">+62</div>
      <input type="text" v-model="store.In_Nomor_Handphone" id="In_Nomor_Handphone" placeholder="Nomor Handphone"><br><br>
      
      <label for="In_Nomor_E-KTP">Nomor E-KTP</label><br>
      <input type="text" v-model="store.In_Nomor_EKTP" id="In_Nomor_EKTP" placeholder="Nomor E-KTP"><br><br>
      
      <label for="In_Rekening">Rekening Gaji Bank Kalsel saat ini</label><br>
      <input type="text" v-model="store.In_Rekening" id="In_Rekening" placeholder="Rekening Gaji Bank Kalsel saat"><br><br>
    </form>
    <button @click="createObject()">Kirim</button>
  </div>
</template>

<script>

import Parse from 'parse'
let store = {In_Nama_Lengkap:"",
              In_Nomor_Absensi:"",
              In_Nomor_Handphone:"",
              In_Nomor_EKTP:"",
              In_Rekening:""}

export default {
  name:'Register',
  data(){
    return{
     store : store,
    }
  },
  methods: {
    createObject() {
      const Users = Parse.Object.extend('Users');
      const user = new Users();

      user.set('Nama_Lengkap',store.In_Nama_Lengkap);
      user.set('Nomor_Absensi_Bank',store.In_Nomor_Absensi);
      user.set('Nomor_Handphone','+62'+store.In_Nomor_Handphone);
      user.set('Nomor_E-KTP', store.In_Nomor_EKTP);
      user.set('Nomor_Rekening',store.In_Rekening)



      user.save().then(
        (result) => {
         console.log('ParseObject created', result);
        },
        (error) => {
          console.error('Error while creating ParseObject: ', error);
        }
      );
    },
  },
}
</script>

<style>
.input-group-text {
    align-items: center;
    padding: .375rem .75rem;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    text-align: center;
    white-space: nowrap;
    background-color: #e9ecef;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    width: 30px;
}
</style>