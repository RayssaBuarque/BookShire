import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// pages
import { AnuncioComponent } from './pages/anuncio/anuncio.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { ChatGeralComponent } from './pages/chat-geral/chat-geral.component';
import { CriacaoAnuncioComponent } from './pages/criacao-anuncio/criacao-anuncio.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaAnunciosComponent } from './pages/lista-anuncios/lista-anuncios.component';
import { LoginComponent } from './pages/login/login.component';
import { PagamentoComponent } from './pages/pagamento/pagamento.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PesquisaAnunciarComponent } from './pages/pesquisa/pesquisa-anunciar/pesquisa-anunciar.component';
import { PesquisaComponent } from './pages/pesquisa/pesquisa.component';
import { PesquisaResultadosComponent } from './pages/pesquisa-resultados/pesquisa-resultados.component';
import { SebosListaComponent } from './pages/sebos-lista/sebos-lista.component';

// components
import { AnuncioThumbComponent } from './components/anuncios/anuncio-thumb/anuncio-thumb.component';
import { BarraPesquisaChatComponent } from './components/barra-pesquisa-chat/barra-pesquisa-chat.component';
import { BarraPesquisaComponent } from './components/barra-pesquisa/barra-pesquisa.component';
import { BarraPesquisaSebosComponent } from './components/barra-pesquisa-sebos/barra-pesquisa-sebos.component';
import { BotaoVermaisSebosComponent } from './components/botao-vermais-sebos/botao-vermais-sebos.component';
import { BottomChatTextboxComponent } from './components/bottom-chat-textbox/bottom-chat-textbox.component';
import { BottomNavBarComponent } from './components/bottom-nav-bar/bottom-nav-bar.component';
import { BtnVoltarComponent } from './components/btn-voltar/btn-voltar.component';
import { CardLivroComponent } from './components/livros/card-livro/card-livro.component';
import { CardVendedorComponent } from './pages/anuncio/card-vendedor/card-vendedor.component';
import { CategoriaThumbnailComponent } from './pages/pesquisa/categoria-thumbnail/categoria-thumbnail.component';
import { ChatGeralConfigComponent } from './components/chat-geral-config/chat-geral-config.component';
import { GraficoAvaliacaoComponent } from './components/grafico-avaliacao/grafico-avaliacao.component';
import { LivroThumbComponent } from './components/livros/livro-thumb/livro-thumb.component';
import { MsgDenunciaComponent } from './components/msg-denuncia/msg-denuncia.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { RatingStarsComponent } from './components/rating-stars/rating-stars.component';
import { SeboThumbComponent } from './components/sebo-thumb/sebo-thumb.component';
import { SecaoPequenaComponent } from './components/secao-pequena/secao-pequena.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';

import { SebosCadastradosListaComponent } from './components/sebos-cadastrados-lista/sebos-cadastrados-lista.component';
import { CodigoAleatorioComponent } from './components/codigo-aleatorio/codigo-aleatorio.component';

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
    ListaAnunciosComponent,
    AnuncioThumbComponent,
    AnuncioComponent,
    BtnVoltarComponent,
    CardVendedorComponent,
    PedidoComponent,
    SeboThumbComponent,
    CriacaoAnuncioComponent,
    GraficoAvaliacaoComponent,
    SebosListaComponent,
    SebosCadastradosListaComponent,
    BotaoVermaisSebosComponent,
    ChatGeralComponent,
    ChatGeralConfigComponent,
    PagamentoComponent,
    BottomChatTextboxComponent,
    CodigoAleatorioComponent,
    MsgDenunciaComponent,
    BarraPesquisaSebosComponent,
    BarraPesquisaChatComponent,
    LoginComponent,
    RatingStarsComponent,
    
    // PesquisaAnunciarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
