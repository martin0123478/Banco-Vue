<template>
  <div class="cabecera">
            <h2 class="principal__cabecera--titulo">Candidatos</h2>
                <form class="formulario" id="form" @submit.prevent="save">
                    <div class="campo">
                        <label for="">Nombre</label>
                        <input class="form-input" type="text" id="nombre" v-model="nombre" >
                    </div>
                   <div class="campos">
                    <div class="campo">
                        <label for="">Posición</label>
                    <input class="form-input" type="text" name="" id="posicion" v-model="posicion">
                    </div>
                    
                    <div class="campo">
                        <label for="">Entrevistador</label>
                    <input class="form-input" type="text" id="entrevistador" v-model="entrevistador">
                    </div>
                    
                    <div class="campo">
                        <label for="">Fecha de entrevista</label>
                    <input class="form-input" type="date" id="fecha" v-model="fecha">
                    </div>
                    <div class="campo">
                        <label for="">Estatus</label>
                        <input class="form-input" type="text"  id="estatus" v-model="estatus">
                    </div>
                    <div class="campo">
                       <input class="button1" type="submit" value="Enviar" id="guardar" >
                    </div>
                    
                   </div>
                   
                    
                </form>
            
          </div>
          
</template>

<script>
import {mapActions} from 'vuex'
import router from '../router'
export default {
    data(){
     return{
        id: Math.random() *100, //objeto para poder asignar datos del formulario
        nombre:'',
        posicion:'',
        entrevistador:'',
        fecha:'',
        estatus:'',
        tecnologias:'',
        nivel_candidato:'',
        cumple_Si:'',
        cumple_No:'',
        comentarios:'',
        
    }
    },
    methods:{
        ...mapActions('recursosHumanos',['agregarCandidatos']), //mapear action de agregar candidatos
        save(){
            const candidato ={ //asignar los datos del formulario al objeto a enviar 
                id:this.id,
                nombre: this.nombre,
                posicion:this.posicion,
                entrevistador:this.entrevistador,
                fecha:this.fecha,
                estatus:this.estatus,
                experiencia : this.experiencia,
                tecnologias:this.tecnologias,
                nivel_candidato: this.nivel_candidato,
                cumple_Si: this.cumple_Si,
                cumple_No: this.cumple_No,
                comentarios:this.comentarios
                }
            this.agregarCandidatos(candidato) //enviar los datos del candidato para hacer la petición
            console.log(candidato)
            this.$router.push({name:'tabla-rh'}) //dirigir a la pagina de la tabla de recursos humanos
        }
    },
    computed:{
       
    }
}
</script>

<style scoped>
 .formulario{
    display: flex;
    flex-direction: column;
}
.campo{
    margin-bottom: 20px;
}

.campo label{
    display: block;
    font-size: 14px;
    font-weight:normal;
}
.form-input{
    width: 300px;
    height: 48px;
    border-radius: 4px;
    border: 1px solid black;
}
.button1{
    width: 140px;
    height: 48px;
    background-color: #01599B;
    color: var(--color-terciario);
    border-radius: 5px;
    border: #01599B;
    text-align: center;
}

</style>
