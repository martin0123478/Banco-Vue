import state from './state'
import * as actions from './action'
import * as mutations from './mutations'
import * as getters from './getters'


const entreModule = {
    namespaced:true,
    actions,
    getters,
    mutations,
    state
}


export default entreModule