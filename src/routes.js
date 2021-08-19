import Cadastro from './components/shared/cadastro/Cadastro.vue'
import Home from './components/home/Home.vue'

export const routes = [
    {path: '', component: Home, titulo: 'Home'}, //equivale a barra no final de: localhost:3000/#/ <-
    {path: '/cadastro', component: Cadastro, titulo: 'Cadastro'} //equivale a: localhost:3000/#/cadastro <-
];