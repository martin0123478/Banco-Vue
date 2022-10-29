<template>
  <div class="principal__cabecera ">
        <h2 class="principal__cabecera--titulo">Candidatos</h2>
                    <div>
                        <input class="principal__cabecera--input"
                        id="busqueda"
                        type="search"
                        >
                </div>
            
          </div> 
  <section class="section_table">
            <table class="tabla_Candidatos" id="tabla">
              <thead>
                
                  <tr>
                    <th class="Nombre_Col Nombre_Col_Cab name">   Nombre <img class="Icon_flecha_candidatos" src="@/assets/images/flecha.png" />   </th>
                    <th class="Posicion_Col Posicion_Col_Cab item1 pos"> Posicion <img class="Icon_flecha_candidatos" src="@/assets/images/flecha.png" /> </th>
                   
                    <th class=" Estatus_Col_Cab esta">  Estatus <img class="Icon_flecha_candidatos" src="@/assets/images/flecha.png" /> </th>
                    <th class="Registro_Col_Cab fech" >Fecha entrevista <img class="Icon_flecha_candidatos" src="@/assets/images/flecha.png" /> </th>
                    <th class="Boton_Col Boton_Col_Cab item1"></th>
                   </tr>
               
              </thead>
              <tbody id="lista"> 
                <tr class="row-candidato" v-for="item in getterCandidatos" :key="item">
                <td class="Nombre_Col"> {{item.nombre}}</td>
                <td class="Posicion_Col">{{item.posicion}}</td>
                <td class="Registro_Col">{{item.estatus}}</td>
                 <td class="Estatus_Col">{{item.fecha}}</td>
                 <td class="Estatus_Col"><img class="delete" src="@/assets/images/Delete.png" alt="" @click="borrar(item.id)"></td>
                 
                                    
                </tr>
            
              </tbody>
            </table>
          </section>
          
</template>


<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  methods:{
      borrar(id){ //metodo para poder eliminar a un candidato del state por medio de su id
        this.deleteCandidatos(id)
      },
    ...mapActions('recursosHumanos',['loadCandidatos','deleteCandidatos']) //mapear acciones de cargar candidato y eliminar
  },
  created(){
    this.loadCandidatos() //cuando se crear el componente trae a todos los candidatos
  },
  computed:{
    ...mapGetters('recursosHumanos',['getterCandidatos']) //getter para regresar el array de objetos e iterar en el
  }
}
</script>




  
<style scoped>
.principal__cabecera{
  height: 125px;
  display: flex;
  justify-content:space-between;
  align-items: center;
}

.principal__cabecera--titulo{
  font-size:24px;
  font-weight: bold;
  text-align: left;
}
.principal__cabecera--input{
    /* margin-right: 150px; */
  padding: 10px;
  border: 1px solid #A6A6A6;
  border-radius: 25px;
  height: 35px;
  width: 400px;
  background-color: #DADADA;
  color: #A6A6A6;
 
}
.section_table{
    /* Section tabala */
    width: 100%;
    height: 541px;
    display: flex;
  
    padding-left: 20px;
    padding-right: 20px;
  }
  
  .tabla_Candidatos {
    /* Tam. table*/
    width: 100%;
    height:230px;
    /* Pos. encabezado*/
    margin-top: 20px;
    /* Col sombreadas*/
    border-collapse: collapse;
    table-layout: fixed;
  }
  
  .tabla_Candidatos tbody tr:hover{
    background-color: gray;
  }
  
  thead th{
    font-size: 18px;
    text-align: left;
    padding-left: 20px;
  }
  
  /* Aqui */
  
  th{
    padding-left: 24px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  
  .Icon_flecha_candidatos{
    width: 11px;
    height: 6px;
    
    /* Pos Flecha*/
    margin-left: 70px;
    margin-top: -15px;
    margin-bottom: 15px;
  
  }
  
  .row-candidato{
    background-color: #EEEEEE;
    border: 5px solid white;
  }
  
  .button_candidatos:hover {
    background: var(--color-primario);
  }
  
  .button_candidatos:active {
    transform: scale(0.95);
  }
  
  
  td {
    font-size: 15px;
    text-align: center;
  
    padding-left: 24px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  
  .button_candidatos{
    /* Texto */
    font-size: 18px;
    line-height: 30px;
    color: #fff; 
  
      /* Boton */
    background-color: var(--color-botones);
    width: 142px;
    height: 25px;
  
    text-decoration: none;
    border: none;
    border-radius: 100px;
  
    display: flex;
    justify-content: center;
    align-items: center;
  
  }
  
      /* Imagen - Boton */
  .Icon_button_candidatos{
    width: 22px;
    height: 18px;
    margin-right: 5px;
  }

  .delete{
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  
</style>