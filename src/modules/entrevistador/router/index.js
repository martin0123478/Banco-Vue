export default{
    name:'entrevista',
    component:() => import(/* webpackChunkName: "daybook" */ '@/modules/entrevistador/views/entrevistador.vue'),
    children:[ //rutas hijas del path entrevista
        {
            path:'', //ruta en blanco para la pagina principal
            name:'tabla-ent',
            component:() => import(/* webpackChunkName: "tabla" */ '@/modules/entrevistador/pages/tabla-entre'),
        },
        {
            path:':id', //ruta para hacer redireccion dependiendo el id
            name:'entry',
            component:() => import(/* webpackChunkName: "tabla" */ '@/modules/entrevistador/pages/form-entrevistador'),
            props:(route) =>{
                return{
                    id:route.params.id //para poder tomar el id del url
                }
            }
        }
    ]
}