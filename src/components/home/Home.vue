<template>
  <div>
    <h1 class="titulo">{{ titulo }}</h1>

    <!-- data binding B -->
    <input
      type="search"
      class="filtro"
      @input="filtro = $event.target.value"
      placeholder="filtre por titulo"
    />
    <!-- -------------- -->

    <ul class="lista-fotos">
      <!-- data binding A -->
      <li
        class="lista-fotos-item"
        v-for="foto of fotosComFiltro"
        v-bind:key="foto"
      >
        <!-- -------------- -->

        <meu-painel class="botao-teste" :titulo="foto.titulo">
          <imagem-responsiva
            :url="foto.url"
            :titulo="foto.titulo"
          />
          <meu-botao 
          tipo="button" 
          rotulo="Remover" 
          @botaoAtivado="remove(foto)"
          :confirmacao="true"
          estilo="perigo"
          />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from "../shared/painel/Painel.vue";
import ImagemResponsiva from "../shared/image-responsiva/ImagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";

export default {
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao
  },

  data() {
    return {
      titulo: "Alurapic",
      fotos: [], // data binding A: da fonte de dados(api) para a vue(diretiva)
      filtro: "" // data binding B: da vue(diretiva) para a fonte de dados(imagens)
    };
  },

  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i");

        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  },

  methods: {
    remove(foto) {
      alert('Remover a foto ' + foto.titulo)
    }
  },

  created() {
    this.$http
      .get("http://localhost:3000/v1/fotos")
      .then(res => res.json())
      .then(
        fotos => (this.fotos = fotos),
        err => console.log(err)
      );
  }
};
</script>

<style>
.centralizado {
  text-align: center;
}

.titulo {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.filtro {
  display: block;
  width: 100%;
  border: solid 2px greyy;
  border-radius: 0.3rem;
}
</style>
