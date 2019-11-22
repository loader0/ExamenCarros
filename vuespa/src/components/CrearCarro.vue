<template>
<form class="form-inline">
<div class="form-group">
   <label>Marca:</label>&nbsp;<input class="form-control" type="text" v-model="marca" />
   <label>Modelo:</label>&nbsp;<input class="form-control" type="text" v-model="modelo" />
     <label>Precio:</label>&nbsp;<input class="form-control" type="text" v-model="precio" />
   &nbsp;<input class="btn btn-info " type="button" v-on:click="guardarClick" value="crear" />
</div>
</form>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CrearCarro",
  data: function() {
    return {
      marca: "",
      modelo: "",
      precio: ""
    };
  },
  methods: {
    async guardarClick() {
      await this.agregarCarro({
        marca: this.marca,
        modelo: this.modelo,
        precio: this.precio
      });
    },

    ...mapActions(["agregarCarro"])
  }
};
</script>