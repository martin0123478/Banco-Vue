export const setCandidatos =  (state,candidatos)=>{ //para poder asignar los candidatos de peticion get
    state.candidatos = candidatos

}

export const borrarCandidatos =  (state,ref)=>{ //eliminar candidato del estado
    state.candidatos = state.candidatos.filter(item => item.id !== ref)

}

export const postCandidatos =  (state,ref)=>{ //crear un nuevo candidato 
    state.candidatos = state.candidatos.push(ref)

}