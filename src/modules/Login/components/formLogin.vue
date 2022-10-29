<template>
  <form class="formulario" @submit.prevent="ingresar">
                <div class="">
                    <img class="user" src="@/assets/images/user-icon.png">
                </div>
                <div class="campos">
                    <label for="email" class="label">Email</label>
                    <input v-model="candidato.email"  type="text" placeholder="Email" >
                    <label for="password" class="label password">Password</label>
                    <input v-model="candidato.password" type="password" placeholder="Password" >
                </div>
                <input type="submit" class="boton" value="Ingresar" id="boton" >
            </form>
</template>

<script>
import banco from '@/api/banco'
export default {
    data(){
        return{
    candidato:{
        email:'',
        password:''
         }     
            
    }
},

    methods:{
       async ingresar(){
            const {data} = await banco.get('/users')
            console.log(data)
            console.log(this.candidato.email)
            if(this.candidato.email === 'jorge@mail.com' && this.candidato.password ==='12345'){
                this.$router.push('/super')
            }else if(this.candidato.email === 'giovanni@mail.com' && this.candidato.password ==='12345'){
                this.$router.push('/entrevista') 
            }else if(this.candidato.email === 'martin@mail.com' && this.candidato.password ==='12345'){
                 this.$router.push('/rh')
            }   
           
        }
    }
    }
    

</script>

<style scoped>
.formulario{
    background-color: #01599b;
    width: 100%;
    max-width: 400px;
    padding: 20px 40px 40px;
    border-radius: 4px;
    box-shadow: 0 4px 4px rgba(0,0,0,.5);
   
   
}
.boton{
    padding-left: 5px;
    text-align: left;
    width: 260px;
    height: 40px;
    background-color:#89D1F3;
    margin-top: 15px;
    border: 1px solid #01599B;
    border-radius: 5px;
}
.user{
    width: 60px;
    display: block;
    margin: 0 auto;
}
.user img{
    width: 100%;
    display: block;
}
.formulario .label{
    margin: 0 0 .5rem;
    display: block;
    font-size: 0.875rem;
    font-weight: bold;
    text-align: left;
}
.formulario .label.password{
    margin: 2rem 0 .5rem;
}
.formulario input[type="text"],
.formulario input[type="password"],
.formulario input[type="submit"]{
    width: 100%;
    padding: 16px 10px;
    display: block;
    border: none;
    border-radius: 5px;
}
.formulario input[type="submit"]{
    padding: 10px 10px;
    margin: 50px auto 50px;
    color: #000000;
    font-size: 0.875rem;
    font-weight: bold;
    text-align: left;
    border-radius: 5px;
    background: #89D1F3;
    cursor: pointer;
}
.imagenApoyo{
    margin: 20px auto 0;
    max-width: 244px;
    display: block;
}
.imagenApoyo img{
    width: 100%;
    display: block;
}
</style>