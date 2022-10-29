import { createStore } from 'vuex'
import recursosHumanos from '../modules/recursos-humanos/store/recursosHumanos'
import entrevista from '@/modules/entrevistador/store/entrevista'
import principal from '@/modules/super-usuario/store/super'
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: { //ingresar los modulos de store para hacer la aplicacion modularizada
    recursosHumanos,
    entrevista,
    principal
  }
})
