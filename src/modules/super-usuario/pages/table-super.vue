<template>
  <section class="principal graficos">
    <div class="principal__cabecera">
        <h2 class="principal__cabecera--titulo">Vista general</h2>
        <div class="create-boton">
            <input class="create" type="button" value="Agregar" @click="this.$router.push({name:'agregarSuper'})">
            <span class="icon icon-user-plus"></span>
        </div>
        <div class="box-search">
                <input type="search" id="search" placeholder="Buscar candidato...">
                <span class="icon icon-search"></span>
        </div>
    </div>
    <div class="contenido">
        <table>
            <tr>
                <th>RH</th>
                <th>Fecha</th>
                <th>Nombre</th>
                <th>Especialidad</th>
                <th>Experiencia</th>
                <th>Encargado</th>
                <th>CV</th>
                <th>Opciones</th>
            </tr>
            <tbody id="table">
                <tr  v-for="item in getterCandidatos" :key="item">
                  <td>{{item.entrevistador}}</td>
                  <td>{{item.fecha}}</td>
                  <td>{{item.entrevistado}}</td>
                  <td>{{item.especialidad}}</td>
                  <td>{{item.experiencia}}</td>
                  <td>{{item.encargado}}</td>
                  <td>{{item.cv}}</td>
                  <td>
                    <!-- <select name="ops"  class="option" @change="onChange">
                        <option disable selected hidden>Seleccione</option>
                        <option id="1" value="eliminar"  class="op eliminar">Eliminar</option>
                        <option value="editar" class="op editar">Editar</option>
                    </select> -->
                    <button class="eliminar" @click="borrar(item.id)">Eliminar</button>
                    <button class="editar" @click="$router.push({name:'super-entry',params:{id:item.id}  })">Editar</button>
               </td>
                </tr>
            </tbody>
        </table>
    </div>
</section>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {

  methods:{
    onChange(event) {
      console.log(event.target)
    
      
      
    },
     borrar(id){ //metodo para eliminar candidato por id
        // this.deleteCandidatos(id)
        this.deleteCandidatos(id) // dipara la accion de eliminar enviando el id del candidato
      },
    ...mapActions('principal',['loadEntrevista','deleteCandidatos']), //mapea las acciones de cargar candidatos y eliminar
     
  },
  computed:{
    ...mapGetters('principal',['getterCandidatos']) //getter para traer los candidatos del store
  },
  created(){
    this.loadEntrevista() //al crear el componente traer a los candidatos 
  }
}
</script>

<style scoped>
.principal__cabecera{
    height: 120px;
  }
  .principal__cabecera--titulo{
    text-align: center;
    font-size: 40px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  .create-boton{
    position: relative;
    vertical-align: top;
    display: inline-block;
  }
  .create-boton span{
    position: absolute;
	width: 15px;
	height: 16px;
	left: 15px;
	top: 50%;
	transform: translateY(-50%);
    color: #fff;
  }
  .create{
    text-decoration: none;
    border: none;
    padding: 12px 40px;
    font-size: 16px;
    background-color: #01599b;
    color: #fff;
    border-radius: 10px;
    box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
    cursor: pointer;
    outline: none;
    transition: 0.2s all;
  }
  .create:active{
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
  .box-search{
    float: right;
    padding: 5px;
    position: relative;
  }
  .box-search input{
    width: 400px;
    height: 40px;
    padding: 0 20px;
    font-size: 18px;
    color: #000;
    outline: none;
    border: 1px solid silver;
    border-radius: 30px;
    background-color: rgb(216, 216, 216);
  }
  .box-search span{
	position: absolute;
	width: 15px;
	height: 15px;
	left: 8px;
	top: 50%;
	transform: translateY(-50%);
  }
  table{
    width: 100%;
    
    border-spacing: 0 0.5em;
  }
  
  th,td{
    padding: 5px;
  }
  
  th{
    background-color: #fff;
    color: #000;
    text-align: left;
  }
  
  td:first-child { 
    border-left-style: rgb(216, 216, 216); 
    border-top-left-radius: 10px; 
    border-bottom-left-radius: 10px; 
  } 
  td:last-child { 
    border-right-style: rgb(216, 216, 216); 
    border-bottom-right-radius: 10px; 
    border-top-right-radius: 10px; 
  }
  
  tr{
    background-color: rgb(216, 216, 216);
  }
  
  tr:hover{
    background-color: #aaa;
    cursor: pointer;
  }
  .option{
    text-decoration: none;
    border: none;
    padding: 6px 20px;
    font-size: 12px;
    background-color: #01599b;
    color: #fff;
    border-radius: 10px;
  }
  .op{
    color: #fff;
  }
  .eliminar,.editar{
    background-color: #01599b;
    border: none;
    height: 20px;
    width: 50px;
    margin-right: 20px;
    margin-top: 10px;
    color: white;
  }

@media only screen and (max-width:768px){
    
    .create{
        display: none;
      }
      .box-search input{
        width: 100%;
        display: flex;
        justify-content: center;
      }
        table{
          display: block;
          
        }
    
}



</style>