<template>
  <div class="home container">
    <h3>Carros</h3>
    <table class="table">
      <thead><tr><th>Id</th>
      <th>Marca</th>
      <th>Modelo</th>
      <th>Precio</th>
      </tr></thead>
      <tbody>
        <tr v-for="t in carros" v-bind:key="t.id" >
          <td>{{t.id}}</td>
          <td>{{t.marca}}</td>
          <td>{{t.modelo}}</td>
          <td>{{t.precio}}</td>
          <td><button class="btn btn-success" v-on:click="editar(t)">Editar</button>|
          <button class="btn btn-success" v-on:click="borrar(t)">Borrar</button>
          </td>
        </tr>
      </tbody>
    </table>
    
    <div><button class="btn btn-success" v-on:click="mostrarNueva()" >Nueva</button></div>
    <div>&nbsp;</div>
    <editar-carro v-if="carroSeleccionada" ></editar-carro>
    <crear-carro v-else></crear-carro>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";
import CrearCarro from "../components/CrearCarro";
import EditarCarro from "../components/EditarCarro";

export default {
  name: "Carros",
  components: {
    CrearCarro, EditarCarro
  },
  
  methods: {
    editar(carro){
         this.seleccionarCarro(carro);
    },
    borrar(carro){
      this.borrarCarro(carro);
    },
    mostrarNueva(){
      this.seleccionarCarro(null);
    },
    ...mapActions(["leerCarros", "borrarCarro", "seleccionarCarro"])
  },
  computed: {
    ...mapGetters(["carros", "carroSeleccionada"])
  },
  created() {
    this.leerCarros();
  }
};
</script>
