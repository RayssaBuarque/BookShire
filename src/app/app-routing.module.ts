import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// IMPORTANDO COMPONENTES PERSONALIZADOS
import { HomeComponent } from './pages/home/home.component';
import { PesquisaComponent } from './pages/pesquisa/pesquisa.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { PesquisaResultadosComponent } from './pages/pesquisa-resultados/pesquisa-resultados.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PesquisaAnunciarComponent } from './pages/pesquisa/pesquisa-anunciar/pesquisa-anunciar.component';
import { NotificacoesComponent } from './pages/notificacoes/notificacoes.component';
import { ListaAnunciosComponent } from './pages/lista-anuncios/lista-anuncios.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    // DETALHE:: especificar ID do perfil mais tarde
    path:'perfil',
    component: PerfilComponent
  },
  {
    path:'anunciar/pesquisa',
    component: PesquisaAnunciarComponent
  },
  {
    path:'pesquisa',
    component: PesquisaComponent,
  },
  {
    path:'pesquisa/:pesquisaQuery',
    component: PesquisaResultadosComponent
  },
  {
    path:'acesso/categoria/:id',
    component: CategoriaComponent
  },
  {
    path:'categoria/:id',
    component: CategoriaComponent
  },
  {
    path:'anuncios',
    component: ListaAnunciosComponent
  },
  {
    path:'malur',
    component: NotificacoesComponent
  },

  //Rota default (padrão) = Home
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
