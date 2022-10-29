// export const myGetter =  (state)=>{
    //return state
// }

export const setCandidatos = (state,ref)=>{ //asigna los valores de cada cabdidato al estado
    state.candidatos = ref
}

export const setCandidato = (state,ref)=>{ //muta para solo traer un candidato
    state.candidato = ref
}

export const cambiaCandidato = (state,entry)=>{ //actualiza los datos del candidato
    const idx = state.entries.map(e => e.id).indexOf(entry.id)
        state.candidatos[idx] = entry
}