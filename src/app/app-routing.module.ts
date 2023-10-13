import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PesquisaComponent } from './pages/pesquisa/pesquisa.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { PesquisaResultadosComponent } from './pages/pesquisa-resultados/pesquisa-resultados.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

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
    path:'pesquisa',
    component: PesquisaComponent
  },
  {
    path:'pesquisa/:pesquisaQuery',
    component: PesquisaResultadosComponent
  },
  {
    path:'categoria/:id',
    component: CategoriaComponent
  },
  //em caso de rota não determinada, retorne para a Home
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
