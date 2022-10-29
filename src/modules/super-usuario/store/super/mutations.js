// export const myAction =  (state)=>{

// }
export const setCandidatos =  (state,candidatos)=>{ //asignar los candidatos de la peticion al state
    state.candidatos = candidatos

}


export const postCandidatos =  (state,ref)=>{ //crear un nuevo candidato en el state
    state.candidatos = state.candidatos.push(ref)

}


export const borrarCandidatos =  (state,ref)=>{ //elimnar un candidato del state
    state.candidatos = state.candidatos.filter(item => item.id !== ref)

}

export const cambiaCandidato = (state,entry)=>{ //modificar al viejo candidato
    const idx = state.entries.map(e => e.id).indexOf(entry.id)
        state.candidatos[idx] = entry
}