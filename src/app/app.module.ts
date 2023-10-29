import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BottomNavBarComponent } from './components/bottom-nav-bar/bottom-nav-bar.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { SecaoPequenaComponent } from './components/secao-pequena/secao-pequena.component';
import { LivroThumbComponent } from './components/livros/livro-thumb/livro-thumb.component';
import { PesquisaComponent } from './pages/pesquisa/pesquisa.component';
import { BarraPesquisaComponent } from './components/barra-pesquisa/barra-pesquisa.component';
import { CategoriaThumbnailComponent } from './pages/pesquisa/categoria-thumbnail/categoria-thumbnail.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { CardLivroComponent } from './components/livros/card-livro/card-livro.component';
import { PesquisaResultadosComponent } from './pages/pesquisa-resultados/pesquisa-resultados.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PesquisaAnunciarComponent } from './pages/pesquisa/pesquisa-anunciar/pesquisa-anunciar.component';
import { NotificacoesComponent } from './pages/notificacoes/notificacoes.component';
import { CardNotificacaoComponent } from './components/card-notificacao/card-notificacao.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ListaAnunciosComponent } from './pages/lista-anuncios/lista-anuncios.component';
import { AnuncioThumbComponent } from './components/anuncios/anuncio-thumb/anuncio-thumb.component';
import { AnuncioComponent } from './pages/anuncio/anuncio.component';
import { BtnVoltarComponent } from './components/btn-voltar/btn-voltar.component';
import { CardVendedorComponent } from './pages/anuncio/card-vendedor/card-vendedor.component';
import { ConversaThumbComponent } from './pages/chat/conversa-thumb/conversa-thumb.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { SeboThumbComponent } from './components/sebo-thumb/sebo-thumb.component';
import { ListaSebosComponent } from './pages/lista-sebos/lista-sebos.component';
import { CriacaoAnuncioComponent } from './pages/criacao-anuncio/criacao-anuncio.component';
// import { PesquisaAnunciarComponent } from './pages/pesquisa-anunciar/pesquisa-anunciar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BottomNavBarComponent,
    TopNavBarComponent,
    SecaoPequenaComponent,
    LivroThumbComponent,
    PesquisaComponent,
    BarraPesquisaComponent,
    CategoriaThumbnailComponent,
    CategoriaComponent,
    CardLivroComponent,
    PesquisaResultadosComponent,
    PerfilComponent,
    PesquisaAnunciarComponent,
    NotificacoesComponent,
    CardNotificacaoComponent,
    ChatComponent,
    ListaAnunciosComponent,
    AnuncioThumbComponent,
    AnuncioComponent,
    BtnVoltarComponent,
    CardVendedorComponent,
    ConversaThumbComponent,
    PedidoComponent,
    SeboThumbComponent,
    ListaSebosComponent,
    CriacaoAnuncioComponent,
    // PesquisaAnunciarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
