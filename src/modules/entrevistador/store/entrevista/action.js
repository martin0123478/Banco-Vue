import banco from '@/api/banco'
// export const myAction = async ({commit})=>{

// }

export const getCandidatos = async ({commit})=>{ //accion para traer candidato del API
    const {data} = await banco.get('/candidatos')
    console.log(data)
    commit('setCandidatos',data)
}
export const getCandidato = async ({commit},id)=>{ //accion para traer un candidato por su id
    const {data} = await banco.get(`/candidatos/${id}`)
    console.log(data)

   return data
}


export const updateCandidato = async ({commit},data)=>{ //accion para actualizar candidato con nuevos dato
     await banco.put(`/candidatos/${data.id}`,data)
     commit('cambiaCandidato',{...data})
    

}