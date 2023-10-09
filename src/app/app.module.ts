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
    PesquisaResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
