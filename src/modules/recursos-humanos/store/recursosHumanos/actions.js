
import banco from '@/api/banco'
export const loadCandidatos = async ({commit})=>{ //accion para poder traer a todos los candidatos
  const {data} = await banco.get('/candidatos')
    console.log(data)
   
  commit('setCandidatos',data)
}

export const deleteCandidatos = async ({commit},id)=>{ // accion para borar un candidato por su id
   await banco.delete(`/candidatos/${id}`)
      console.log('borrado')
     
    commit('borrarCandidatos',id)
  }

export const agregarCandidatos = async ({commit},registro)=>{ //accion para crear un nuevo candidato
  console.log('agregar')
  await banco.post('/candidatos',registro)
    
    
    commit('postCandidatos',registro)
  }