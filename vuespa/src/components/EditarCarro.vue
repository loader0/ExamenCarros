<template>
<form class="form">
<div class="form-group">
    <label>Id: </label>&nbsp; <input class="form-control" type="text" v-model="carroSeleccionada.id" disabled=disabled />
   <label>Marca:</label>&nbsp;<input class="form-control" type="text" v-model="carroSeleccionada.marca" />
   <label>Modelo:</label>&nbsp;<input class="form-control" type="text" v-model="carroSeleccionada.modelo" />
   <label>Precio:</label>&nbsp;<input class="form-control" type="text" v-model="carroSeleccionada.precio" />
   &nbsp;<input class="btn btn-info " type="button" v-on:click="actualizarClick" value="Actualizar" />
</div>
</form>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "EditarCarro",
  //props: ["id","titulo", "descripcion"],
  data: function() {
    return {
      id: 0,
      marca: "",
      modelo: "",
      precio: 0
    };
  },
   computed: {
    ...mapGetters([ "carroSeleccionada"])
  },
  methods: {
    async actualizarClick() {
      await this.actualizarCarro({
        id : this.carroSeleccionada.id,
        marca: this.carroSeleccionada.marca,
        modelo: this.carroSeleccionada.modelo,
        precio: this.carroSeleccionada.precio
      });
    },

    ...mapActions(["actualizarCarro"])
  }
};
</script>