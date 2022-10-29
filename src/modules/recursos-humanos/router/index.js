export default{
    name:'rh', //ruta principal de recursos humanos
    component:() => import(/* webpackChunkName: "daybook" */ '@/modules/recursos-humanos/views/rh-page.vue'),
    children:[
        {
            path:'',
            name:'tabla-rh', //componente de la tabla de recursos humanos
            component:() => import(/* webpackChunkName: "tabla" */ '@/modules/recursos-humanos/pages/tabla-rh.vue'),
        },
        {
        path:'/agregar', //ruta para el formulario de creacion de candidatos
        name:'form-rh',
        component:() => import(/* webpackChunkName: "form" */ '@/modules/recursos-humanos/pages/form-rh.vue'),
        }
        // {
        //     path:':id',
        //     name:'entry',
        //     component:() => import(/* webpackChunkName: "daybook-entryview" */ '@/modules/daybook/views/EntryView.vue'),
        //     props:(route) =>{
        //         return{
        //             id:route.params.id
        //         }
        //     }
        // }
    ]
}