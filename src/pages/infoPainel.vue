<template>
  <div class="container">
    <div class="cart" style="background-color: gray">
      Carros
      <em>{{ carros.length }}</em>
    </div>
    <div class="cart" style="background-color: rgb(70, 199, 70)">
      Prontos
      <em>{{ carrosProntos }}</em>
    </div>
    <div class="cart" style="background-color: rgb(214, 51, 51)">
      Aguardando Aprovação
      <em>{{ aguarApro }}</em>
    </div>
    <div class="cart" style="background-color: orange">
      Em Serviço
      <em>{{ emServico }}</em>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "infoPainel",

  computed: {
    ...mapState(["carros"]),
    carrosProntos() {
      return this.carros.filter((carro) => carro.situacao === "PRONTO").length;
    },
    aguarApro() {
      return this.carros.filter((carro) => carro.situacao === "AGUARDANDO")
        .length;
    },
    emServico() {
      return this.carros.filter((carro) => carro.situacao === "EM SERVIÇO")
        .length;
    },
  },
  methods: {
    chamarCarros() {
      this.$store.dispatch("getCarros");
    },
  },
  mounted() {
    this.chamarCarros();
  },
});
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@200&display=swap");
.corpo {
  display: flex;
  flex-direction: row;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: "Dosis", sans-serif;
  font-size: 40px;
}
.cart {
  justify-content: center;
  text-align: center;
  border: none;
  border-bottom-right-radius: 15px;
  margin: 20px;
  padding: 2px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.3);
  color: white;
  display: flex;
  flex-direction: column;
  width: 220px;
}
em {
  font-size: 45px;
  font-weight: bold;
}
</style>
