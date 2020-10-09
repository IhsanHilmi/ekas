<template>
    <div class="Login">
        <label for="In_Nomor_Absensi">Nomor Absensi</label><br>
      <input type="text" v-model="Logindata.In_Nomor_Absensi" id="In_Nomor_Handphone" placeholder="Nomor Absensi"><br>
        <label for="In_Nama_Lengkap">Nama Lengkap</label><br>
      <input type="text" v-model="Logindata.In_Nama_Lengkap" id="In_Nama_Lengkap" placeholder="Nama Lengkap"><br><br>
      <button @click="Login()">Kirim</button>
    </div>
</template>

/* eslint-disable */
<script>
import Parse from 'parse'
let Logindata = {
                In_Nama_Lengkap:"",
                In_Nomor_Absensi:""
                }
let datas = []
export default {
    name:'Login',
    data(){
        return{
            Logindata: Logindata,
            datas: datas
        }
    },
    methods:{
        Login() {
            let query = new Parse.Query('Users');
            query.select("Nomor_Absensi_Bank")
            query.equalTo("Nama_Lengkap", Logindata.In_Nama_Lengkap);
            query.equalTo("Nomor_Absensi_Bank", Logindata.In_Nomor_Absensi);
            query.first().then(
            (result) => {
            if(result.length == 0){
                alert("Wrong Data!");
                this.$router.push({path:'/'});
            }
            else{
                console.log(JSON.stringify(result))
                console.log('data', result)
                // this.$router.push({name:'Edit', params: {datapassed: JSON.stringify(result)} });
                this.$router.push({ path: `edit/${result.id}`});
            }
        },
            (error) => {
            console.log('Error while trying to show ParseObject: ', error);
        }
        )
        }
        }
    }
</script>
<style>

</style>