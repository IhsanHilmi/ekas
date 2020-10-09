<template>
    <div class="edit">
        <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Edit</router-link>
    </div>
    <form action="#">
      <label for="In_Nama_Lengkap">Nama Lengkap</label><br>
      <input type="text" v-model="store.Nama_Lengkap" id="In_Nama_Lengkap" placeholder="Nama Lengkap"><br><br>
      
      <label for="In_Nomor_Absensi">Nomor Absensi Bank Kalsel</label><br>
      <input type="text" v-model="store.Nomor_Absensi" id="In_Nomor_Absensi" placeholder="Nomor Absensi Bank Kalsel" value=""><br><br>
      
      <label for="In_Nomor_Handphone">Nomor Handphone</label><br>
      <div class="input-group-text">+62</div>
      <input type="text" v-model="store.Nomor_Handphone" id="In_Nomor_Handphone" placeholder="Nomor Handphone" ><br><br>
      
      <label for="In_Nomor_E-KTP">Nomor E-KTP</label><br>
      <input type="text" v-model="store.Nomor_EKTP" id="In_Nomor_EKTP" placeholder="Nomor E-KTP" ><br><br>
      
      <label for="In_Rekening">Rekening Gaji Bank Kalsel saat ini</label><br>
      <input type="text" v-model="store.Nomor_Rekening" id="In_Rekening" placeholder="Rekening Gaji Bank Kalsel"><br><br>
    </form>
    <button @click="saveDataUser()">Kirim</button>
    

    </div>
</template>
/* eslint-disable */
<script>
import Parse from 'parse'

let passed = {
            Out_Nama_Lengkap:"",
            Out_Nomor_Absensi:"",
            Out_Nomor_Handphone:"",
            Out_Nomor_EKTP:"",
            Out_Rekening:"",
            }
export default {
    name: 'Edit',
    data(){
        return{
            passed: passed,
            store: {
                Nama_Lengkap:"",
                Nomor_Absensi_Bank:"",
                Nomor_Handphone:"",
                Nomor_EKTP:"",
                Nomor_Rekening:"",
            },
            Nomor_Bank_Login: null,
            data_temp: null
        }
    }, 
    beforeCreate(){
        // console.log(JSON.parse(this.$route.params.datapassed)[0].Nomor_Absensi_Bank)
        // this.Nomor_Bank_Login = JSON.parse(this.$route.params.datapassed)[0].Nomor_Absensi_Bank
        
    //   let query = new Parse.Query("Users");
    //   query.equalTo("Nomor_Absensi_Bank", JSON.stringify(JSON.parse(this.$route.params.datapassed)[0].Nomor_Absensi_Bank));
    //   query.first().then(
    //     (result) => {
    //      console.log('ParseObject detected. Showing result', result);
    //      console.log(result)
    //     },
    //     (error) => {
    //       console.log('Error while trying to show ParseObject: ', error);
    //     }
    //   );
    },
    mounted(){
        this.getDataUser()
    },
    methods:{
        EditUser(){
            
        },
        getDataUser() {
            console.log('test getDataUser')
            var id = this.$route.params.id
            let query = new Parse.Query('Users');
            
            query.get(id).then((res) => {
                console.log('datanya ketemu', res)

                this.data_temp = res;

                this.store = {
                    Nama_Lengkap: res.get('Nama_Lengkap'),
                    Nomor_Absensi_Bank:res.get('Nomor_Absensi_Bank'),
                    Nomor_Handphone: res.get('Nomor_Handphone'),
                    Nomor_EKTP: res.get('Nomor_EKTP'),
                    Nomor_Rekening: res.get('Nomor_Rekening'),
                }

            }, (err) => {
                console.log(err)
            })
        },
        saveDataUser() {
            console.log('Old Data', this.data_temp);
            console.log('New Data', this.store);

            this.data_temp.save(this.store).then(() => {
                console.log('updated')
            this.$router.push({ path: `/login` })
            }, err => console.log(err))
        }
    }
}
</script>
<style>

</style>