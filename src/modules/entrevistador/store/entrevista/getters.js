// export const myGetter =  (state)=>{
    //return state

import state from "./state"

// }
export const entreGetter = (state) =>{ //rtorna los candidatos del store
   
    return  state.candidatos
}

// export const getEntryById = (state) =>(id) =>{
//     console.log(id)
//     console.log(state.candidatos)
//    const candidato =  state.candidatos.find(item => item.id === id)
//     if(!candidato) console.log('no existe')
//     console.log(candidato)
//    return candidato
    
// }
export const entrecand = (state) =>{ //trae un solo candidato
    return  state.candidato
}



