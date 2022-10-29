export default{
    name:'super', //ruta principal del super usuario
    component:() => import(/* webpackChunkName: "daybook" */ '@/modules/super-usuario/views/superUsuario.vue'),
    children:[
        {
            path:'',
            name:'tabla-super', //ruta para mostrar la tabla
            component:() => import(/* webpackChunkName: "tabla" */ '@/modules/super-usuario/pages/table-super.vue'),
        },
        {
            path:'/graficas',//ruta par grafica
            name:'grafica',
            component:() => import(/* webpackChunkName: "tabla" */ '@/modules/super-usuario/pages/graficos.vue')
        },
        {
            path:'/nuevo', //ruta para crear un nuevo candidato
            name:'agregarSuper',
            component:() => import(/* webpackChunkName: "tabla" */ '@/modules/super-usuario/pages/agregarSuper.vue')

            
        },
        {
            path:':id', //ruta para redireccion a candidato
            name:'super-entry',
            component:() => import(/* webpackChunkName: "tabla" */ '@/modules/super-usuario/pages/editarSuper.vue'),
            props:(route) =>{
                return{
                    id:route.params.id
                }
            }
        }
        
    ]
}