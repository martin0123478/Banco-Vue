<template>
  <div class="principal__cabecera ">
        <h2 class="principal__cabecera--titulo">Entrevistas</h2>
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
                <tr class="row-candidato" v-for="item in entreGetter" :key="item">
                <td class="Nombre_Col"> {{item.nombre}}</td>
                <td class="Posicion_Col">{{item.posicion}}</td>
                <td class="Registro_Col">{{item.estatus}}</td>
                 <td class="Estatus_Col">{{item.fecha}}</td>
                 
                  <!-- <td class="Boton_Col"><a class="button_candidatos" href="index-Form.html"><img class="Icon_button_candidatos" src="@/assets/images/ver.png" /> Ver </a></td> -->
                <!-- <td class="Boton_Col">  <router-link to='/form-entre' class="button_candidatos">Agregar</router-link></td> -->
                <td class="Boton_Col">  <button class="button_candidatos" @click="$router.push({name:'entry',params:{id:item.id}  })">Resultado</button></td>
                </tr>
              </tbody>
            </table>
          </section>
          
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  methods:{
    ...mapActions('entrevista',['getCandidatos']), //mapear los actions de traer todos los candidatos
    
  },
  computed:{
    ...mapGetters('entrevista',['entreGetter']) //funciones computadas para usar el getter con los entrevistados
  },
  created(){
    this.getCandidatos() //al momento de crear el componente se ejecuta la accion de traer candidatos
  }

}
</script>

<style scoped>
/* .button_candidatos{
  width: 142px;
  height: 25px;
  border-radius: 100px;
  border: none;
  background-color:#0F74BE;
  font-size: 18px;
  line-height: 30px;
  color: white;
  text-align: center;
} */
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
    cursor: pointer;
    /* Texto */
    font-size: 18px;
    line-height: 30px;
    color: #fff; 
  
      /* Boton */
    background-color: #0F74BE;
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
  
</style>