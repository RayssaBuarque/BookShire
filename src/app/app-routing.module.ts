import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PesquisaComponent } from './pages/pesquisa/pesquisa.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'pesquisa',
    component: PesquisaComponent
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
