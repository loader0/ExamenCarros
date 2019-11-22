import Vue from 'vue'
import Vuex from 'vuex'

import Axios from 'axios';

Vue.use(Vuex)

const apiURLTareas = 'api/Tareas';
const apiURLCarros = 'api/Carros';


export default new Vuex.Store({
  state: {
    tareas: [],
    tareaSeleccionada: null,
    carros: [],
    carroSeleccionada: null,
  },
  getters: {
    tareas: state => state.tareas,
    tareaSeleccionada : state => state.tareaSeleccionada,
    carros: state => state.carros,
    carroSeleccionada : state => state.carroSeleccionada
  },
  mutations: {
    setTareas(state, data) {
      state.tareas = data;
    },
    setCarros(state, data) {
      state.carros = data;
    },  
    setSeleccionarTarea(state, tarea){
      state.tareaSeleccionada = tarea;
    },
    setSeleccionarCarro(state, carro){
      state.carroSeleccionada = carro;
    }
  },
  actions: {
    seleccionarTarea(context, tarea){
      context.commit("setSeleccionarTarea", tarea);
    },
    seleccionarCarro(context, carro){
      context.commit("setSeleccionarCarro", carro);
    },
    async leerTareas(context) {
      console.log("leyendo tareas");
      let tareasData = (await Axios.get(apiURLTareas)).data;
      console.log("se leyeron tareas", tareasData);
      context.commit("setTareas", tareasData);
    },
    async leerCarros(context) {
      console.log("leyendo carros");
      let carrosData = (await Axios.get(apiURLCarros)).data;
      console.log("se leyeron carros", carrosData);
      context.commit("setCarros", carrosData);
    },
    async agregarTarea(context, nuevaTarea) {
      let grabar = (await Axios.post(apiURLTareas, nuevaTarea));
      await context.dispatch('leerTareas');
      
    },
    async agregarCarro(context, nuevaCarro) {
      let grabar = (await Axios.post(apiURLCarros, nuevaCarro));
      await context.dispatch('leerCarros');
      
    },
    async actualizarTarea(context, tareaEditar){
      let grabar = (await Axios.put(apiURLTareas+"/"+tareaEditar.id, tareaEditar));
      await context.dispatch('leerTareas');
    },
    async actualizarCarro(context, carroEditar){
      let grabar = (await Axios.put(apiURLCarros+"/"+carroEditar.id, carroEditar));
      await context.dispatch('leerCarros');
    },
    async borrarTarea(context, tareaABorrar){
      let grabar = (await Axios.delete(apiURLTareas+"/"+tareaABorrar.id));
      await context.dispatch('leerTareas');
    },
    async borrarCarro(context, carroABorrar){
      let grabar = (await Axios.delete(apiURLCarros+"/"+carroABorrar.id));
      await context.dispatch('leerCarros');
    }
  },
  modules: {
  }
})
