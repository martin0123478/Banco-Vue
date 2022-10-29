<template>
<section class="principal__cabecera" >
                        <h2 class="principal__cabecera--titulo"> Frontend Developer - </h2>
                      </section>
  <section> 
            <form id="formulario" >
              <label for="Experiencia"> Experiencia  </label> <br>
              <input v-model="candidato.experiencia" type="text" id="Experiencia"   placeholder="Experiencia laboral"/><br>
            
              <label for="Tecnologias"> Tecnologías </label> <br>
              <input type="text" v-model="candidato.tecnologias" id="Tecnologias" placeholder="Tecnologias y herramientas"/><br>
          
              <label for="Nivel_candidato"> Nivel de candidato </label> <br>
              <select type="text" id="Nivel_candidato">
                <option value="" selected >Seleciona un nivel</option>
                <option value="Programador junior">Programador junior</option>
                <option value="Programador semi senior">Programador semi senior</option>
                <option value="Programador senior">Programador senior</option>
              </select><br>
            
              <label > ¿Cumple con la vacante? </label> <br>
              <input type="radio" id="cumple_Si" name="cumple_vacante" value="Si"> <label for="html">Si</label>
              <input type="radio" id="cumple_No" name="cumple_vacante" value="No"> <label for="css">No</label> <br>
                      
              <label for="Comentarios"> Observaciones </label> <br>
              <textarea v-model="candidato.comentarios" id="Comentarios" name="comentarios" rows="10" cols="40" placeholder="Observaciones y comentarios"></textarea><br>
            
              <input @click.prevent="update" type="submit" class="subir" href="" value="Subir resultados" > 
            </form>
          </section>
</template>

<script>
import axios from 'axios'

import {mapGetters,mapActions} from 'vuex'
export default {
  data(){
    return{
        candidato:{ //Objeto para poder asignar los datos de entrevistado
        id: '',
        nombre:'',
        entrevistador:'',
        fecha:'',
        especialidad:'',
        experiencia:'',
        encargado:'',
        cv:'cv.pdf'
      
        }
    }
  },
  methods:{
    ...mapActions('entrevista',['getCandidato','updateCandidato']), //mapear acciones de traer candidato y actualizar
    update(){
       const data ={ //poder almacenar los valores del objeto y devolver al formulario
                id:this.candidato.id,
                nombre:this.candidato.nombre,
              posicion:this.candidato.posicion,
              entrevistador:this.candidato.entrevistador,
              fecha:this.candidato.fecha,
              estatus:this.candidato.estatus,
                experiencia : this.candidato.experiencia,
                tecnologias:this.candidato.tecnologias,
                nivel_candidato: this.candidato.nivel_candidato,
                cumple_Si: this.candidato.cumple_Si,
                cumple_No: this.candidato.cumple_No,
                comentarios:this.candidato.comentarios
                }
                console.log(data)
      this.updateCandidato(data) //accion para actualizar los nuevos valores del candidato
       this.$router.push({name:'tabla-ent'})
    }
   

   
    
  },
  created(){
   console.log( this.$route.params.id) 
 
  },

  async mounted(){ //al momento de montar el componente hace la peticion para trer datos del candidato

   this.candidato =await this.getCandidato(this.$route.params.id)
   console.log(this.candidato)
  },
  computed:{
   ...mapGetters('entrevista',['entrecand']), //se traen los datos del candidato
   
   
  },
  
}
</script>

<style scoped>
/* Formulario*/

    .principal{
        width: 100%;
        height: 100%;
    }

  .principal__cabecera{
    height: auto;
    display: flex;
    flex-direction: row;
    flex-flow: wrap;

    /* Distancia entre cabecera y formulario*/
    margin-bottom: 10px;  
    padding-left: 10px;
  }
  
  .principal__cabecera--titulo{
    height: auto;
    font-size: 1.4rem;
  }
  
  input, select, option {
    width: 668px;
    height: 40px;
    border-radius: 5px;
    padding-left: 10px;
  
    margin-bottom: 20px;
    margin-top: 5px;
    border: 1px solid black;
  
  }
  
  #cumple_Si, #cumple_No {
    width: 20px;
    height: 20px;
  
    margin-bottom: 20px;
    margin-top: 5px;
   
  }
  
  textarea {
    width: 668px;
    height: 120px;
    border-radius: 8px;
  
    min-height: 100px;
    max-height: 200px;
    max-width: 668px;
  
    margin-bottom: 20px;
    margin-top: 5px;
  
    border: 1px solid black;
    
    padding-left: 10px;
    padding-top: 5px;
  }
  
  label {
    width: 668px;
    height: 27px;
    margin-top: 5px;
    padding-top: 5px;
    font-size: 15px;
  }
  
  /* Button */
  .subir {

    z-index: 1;
    border-radius: 5px;
    background-color: blue;
    width: 150px;
    height: 35px;
    border: none;
  
    /* Text */
    font-weight: 400px;
    font-size: 16px;
    color: #fff; 
  
    position:relative;
    left: 520px;
    
  }

  .subir:hover {
    background-color: var(--color-primario);
  }

  .subir:active {
    transform: scale(0.95);
  }

  /* Form */
  form {
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 50px;
  }

/* 768px */
@media screen and (max-width:940px) {
    .menu{
      display: none;
    }
  
    .header{
      height: 69px;
    }
  
    .notificacion{
      max-width: 35px;
    }
    
    .notificacion2{
      display: inline;
      max-width: 20px;
    }
  
    .logo{
      max-width: 80px;
    }
  
    .principal__cabecera--titulo {
      width: 40%;
    }
  
    /*responsive form*/
    form {
      width: 100%;
      padding-left: 20px;
      padding-right: 20px;
    }
  
    .principal__cabecera--titulo{
      padding-left: 10px;
      height: auto;
      width: auto;
    }
  
    input,select,textarea {
      width: 100%;
      resize: none;
    }
  
    textarea{
      overflow: scroll;
    }
  
   
    .subir {
      position:relative;
      left: auto;
    }
  
  }

/* ------------------ */


</style>
