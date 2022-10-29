<template>
 <h2>Registro Candidatos</h2>
    <form action="" class="formC" id="form" @submit.prevent="save">
        <section class="sectionForm">
            <div class="cajaInput">
                <label for="nombreRH" class="labelForm">Nombre Recursos Humanos</label>
                <input v-model="candidato.entrevistado" type="text" id="nombreRH" name="Nombre RH" placeholder="Nombre">
            </div>
        </section>
        <section class="sectionForm">
            <div class="cajaInput">
                <label for="fecha"  class="labelForm">Fecha</label>
                <input v-model="candidato.fecha" type="date" id="fecha" name="Fecha"  placeholder="Posición">
            </div>
            <div class="cajaInput">
                <label for="entrevistador" class="labelForm">Entrevistador</label>
                <input v-model="candidato.entrevistador" type="text" id="entrevistado" name="Entrevistador" placeholder="Entrevistador">
            </div>
        </section>
        <section class="sectionForm noMarg">
            <div class="cajaInput">
                <label for="especialidad" class="labelForm">Especialidad</label>
                <input v-model="candidato.especialidad" type="text" id="especialidad" name="Especialidad" placeholder="Entrevistador">
            </div>
            <div class="cajaInput">
                <label for="experiencia" class="labelForm">Experiencia</label>
                <input v-model="candidato.experiencia" type="text" id="experiencia" name="Experiencia" placeholder="Entrevistador">
            </div>
            <div class="cajaInput">
                <label for="encargado" class="labelForm">Encargado</label>
                <input v-model="candidato.encargado" type="text" id="encargado" name="Encargado" placeholder="Entrevistador">
            </div>
        </section>
        
        <div class="botonera">
            <input type="file"  id="guardar" style="display: none;" >
            <label for="guardar">CV</label>
            <input  type="submit" value="Editar" id="guardar">
        </div>
    </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
     return{
       candidato:{ //objeto para poder asignar los valores del formulario
          id: '',
        entrevistado:'',
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
    ...mapActions('principal',['updateCandidato','getCandidato']), //acciones para actualizar y obtener un candidato
    save(){
        const candidato={ //asignar los valores del formulario
        id: this.candidato.id,
        entrevistado:this.candidato.entrevistado,
        entrevistador:this.candidato.entrevistador,
        fecha:this.candidato.fecha,
        especialidad:this.candidato.especialidad,
        experiencia:this.candidato.experiencia,
        encargado:this.candidato.encargado,
        cv:'cv.pdf'


        }
    this.updateCandidato(candidato) //accion de actualizar el candidato con los valores del formulario
    this.$router.push({name:'tabla-super'}) //redireccion a la tabla principal
    }
},

async mounted(){ //al momento de montar el componente hace una peticion para traer los datos del candidato y llenar el formulario

   this.candidato =await this.getCandidato(this.$route.params.id) //obtiene al candidato al hacer la redireccion por su id
   console.log(this.candidato)
  }
}
</script>

<style scoped>
.principal.formCandidatos{
    padding: 1rem 1.5rem;
    background-color: #F5F5F5;
}

.principal.formCandidatos h2{
    color: #000000;
    font-size: 2.5rem;
    text-align: center;
}

.sectionForm{
    display: block;
    margin: 0 auto 1.5rem;
}
.sectionForm.noMarg{
    margin-bottom: 0;
}
.formC{
    margin: 1rem auto 0;
}
.labelForm{
    display: block;
    color: #000000;
    font-size: 0.875rem;
    font-family: 'Inter';
}
.cajaInput{
    max-width: 300px;
    margin-bottom: .25rem;
}
.cajaInput input{
    width: 100%;
    padding: 10px 15px;
    border-width: 1px;
    border-style: solid;
    border-color: #070708;
    border-radius: 5px;
}
.cajaInput input::placeholder{
    color: #D2D2D2;
}
input[type="file"]{
    display: none;
}
input[type="file"] + label{
    display: block;
    height: 44px;
    padding: 10px 15px;
    margin: 1rem 0 0;
    max-width: 149px;
    color: var(--color-terciario);
    font-size: 0.875rem;
    text-align: center;
    border-radius: 5px;
    background-color: #006EC1;
}
#guardar,input[type="submit"]{
    height: 44px;
    display: inline-block;
    padding: 10px 15px;
    margin: 1rem 0 0;
    max-width: 149px;
    color: var(--color-terciario);
    font-size: 0.875rem;
    text-align: center;
    border-radius: 5px;
    border: none;
    background-color: #006EC1;
}

@media only screen and (max-width:768px){
    .principal.formCandidatos{
        background-color: #FFFFFF;
    }
    .principal.formCandidatos h2{
        font-size: 1.75rem;
        text-align: left;
    }
    .formC{
        padding: 0 2rem;
    }
    .cajaInput{
        max-width: initial;
    }
    .cajaInput input{
        border-width: 1px 1px 0 1px;
        border-radius: 5px 5px 0 0;
    }
    input[type="file"] + label{
        margin: 0;
    }
}

</style>