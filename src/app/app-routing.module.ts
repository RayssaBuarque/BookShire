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
import { AnuncioComponent } from './pages/anuncio/anuncio.component';
import { ChatComponent } from './pages/chat/chat.component';
import { CriacaoAnuncioComponent } from './pages/criacao-anuncio/criacao-anuncio.component';
import { SebosListaComponent } from './pages/sebos-lista/sebos-lista.component';
import { ChatGeralComponent } from './pages/chat-geral/chat-geral.component';
import { ChatIndividualComponent } from './pages/chat-individual/chat-individual.component';
import { PagamentoComponent } from './pages/pagamento/pagamento.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    // DETALHE:: especificar ID do perfil mais tarde
    path:'perfil/:id',
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
    path:'categoria/:acesso/:id',
    component: CategoriaComponent
  },
  {
    path:'categoria/:id',
    component: CategoriaComponent
  },

  //ROTAS DE TELAS DE ANÚNCIOS
  {
    path:'anuncios/:idLivro',
    component: ListaAnunciosComponent
  },
  {
    path:'anuncios/:idLivro/:idAnuncio',
    component: AnuncioComponent
  },
  {
    path:'anuncios/:idLivro/:idAnuncio/pagamento',
    component: PagamentoComponent
  },
  {
    path:'anunciar/:idLivro',
    component: CriacaoAnuncioComponent
  },
  {
    path:'rayssa',
    component: LoginComponent
  },
  {
    path:'notificacoes',
    component: NotificacoesComponent
  },
  {
    path:'chat',
    component: ChatGeralComponent
  },
  {
    path:'conversas',
    component: ChatIndividualComponent
  },

  //Sebos 
  {
    path:'sebos',
    component: SebosListaComponent
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
