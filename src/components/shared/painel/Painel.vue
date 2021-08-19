<template>

  <div class="painel" @dblclick="visivel = !visivel">
      <h2 class="painel-titulo">{{ titulo }}</h2>
      <transition name="painel-fade">
        <div class="painel-conteudo" v-show="visivel">
          <slot></slot>
        </div>
      </transition>
  </div>
  
</template>

<script>
export default {
  props: ["titulo"],

  data() {
    return{
      visivel: true
    }
  }
};
</script>

<style scoped>
.painel {
  background: aliceblue;
  padding: 0 auto;
  border: solid 2px grey;
  border-radius: 0.5rem;

  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 5px grey;

  width: 200px;
  height: 100%;
  vertical-align: top;
}

.painel .painel-titulo {
  text-align: center;
  margin: 0 0 10px 0;
  padding: 10px;
}

.painel-fade-enter, .painel-fade-leave-active {
  opacity: 0;
}

.painel-fade-enter-active, .painel-fade-leave-active{
  transition: opacity .4s;
}

</style>

