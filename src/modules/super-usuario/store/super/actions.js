// export const myAction = async ({commit})=>{

// }

import banco from '@/api/banco' //llamada a la pi con axios
export const loadEntrevista = async ({commit})=>{ //cargar a los candidatos
    const {data} = await banco.get('/entrevista')
    commit('setCandidatos',data)
  }

  export const agregarCandidatos = async ({commit},registro)=>{ //crear un nuevo candidato
    console.log('agregar')
    await banco.post('/entrevista',registro)
      
      
     commit('postCandidatos',registro)
   }
export const deleteCandidatos = async ({commit},id)=>{ //eliminar candidatos
await banco.delete(`/entrevista/${id}`)
    console.log('borrado')
  
  commit('borrarCandidatos',id)
}
export const getCandidato = async ({commit},id)=>{ //obtener un candidato
  const {data} = await banco.get(`/entrevista/${id}`)
  console.log(data)

 return data
}

export const updateCandidato = async ({commit},data)=>{ //actualizar al candidato
  await banco.put(`/entrevista/${data.id}`,data)
  commit('cambiaCandidato',{...data})
 

}
