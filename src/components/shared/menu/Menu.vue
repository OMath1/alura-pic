<template>
  <nav>
    <ul class="lista">
      <li class="lista-vertical" v-for="rota in rotas" v-bind:key="rota">
        <router-link :to="rota.path ? rota.path : '/'">
          {{ rota.titulo }} 
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    rotas: {
      // validação da prop criada
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.lista {
  list-style-type: none;
  margin: 0;
  padding: 0;

  overflow: hidden;
  background-color: aliceblue;
  border: solid 1px ;

  border-radius: 0.5rem;
}

.lista-vertical {
  float: left;
  border-right: 1px solid black;
}

.lista-vertical a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.lista-vertical a:hover {
  background-color: lightgray;
}
</style>
