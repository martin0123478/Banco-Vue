import { createRouter, createWebHashHistory } from 'vue-router'
import  rhRouter from '../modules/recursos-humanos/router'
import  entreRouter from '../modules/entrevistador/router'
import  superRouter from '../modules/super-usuario/router'
const routes = [
  {
    path:'/',
    redirect:'/login' ///Ruta principal de la aplicación para poder accesar a los usuarios
  },
  {
    path:'/login',//path del Login 
    name:'login-page',
    component:() => import(/*webPackChunkName:"LoginPage"*/'../modules/Login/pages/login.vue')//Componente agergado con lazy loading
  },
  {
    path:'/rh',//ruta recursos humanos
    ...rhRouter//se importan las rutas hijas de Modulo RH

  },
  {
    path:'/entrevista',//ruta entrevista
    ...entreRouter  //se importan las rutas hijas del modulo de entrevista

  },
  {
    path:'/super', //ruta del super usuario
    ...superRouter  //importacion de rutas hijas del mudulo super usuario
  }
  
  

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
