<template>
  <button
  @click="disparaAcao()"
  class="botao"
  :class="estiloDoBotao" 
  :type="tipo">{{ rotulo }}</button>
</template>

<script>
export default {

  props: {
    tipo: {
      required: true,
      type: String
    },

    rotulo: {
      required: true,
      type: String
    },

    confirmacao: Boolean,
    estilo: String

  },

  methods: {

    disparaAcao() {
    
      if(this.confirmacao) {
        if(confirm('Confirmar operação?')) {
          this.$emit('botaoAtivado');
        }
        return;
      }
      this.$emit('botaoAtivado')
    }
  },

  computed: {

    estiloDoBotao() {
      if(this.estilo == 'padrao' || !this.estilo) return 'botao-padrao'
      if(this.estilo ==  'perigo') return 'botao-perigo'
    }
  }
};
</script>

<style scoped>
.botao {
  width: 90%;
  display: inline-block;
  padding: 10px;
  border-radius: 0.5rem;
  margin: 10px;
  font-size: 1.2rem;
}

.botao-perigo {
  background: crimson;
  color: white;
}

.botao-padrao {
  background: darkcyan;
  color: white;
}
</style>
