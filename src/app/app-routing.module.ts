import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarProdutoComponent } from './components/adicionar-produto/adicionar-produto.component';
import { CardListaProdutosComponent } from './components/card-lista-produtos/card-lista-produtos.component'
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'lista-produtos', component: CardListaProdutosComponent},
  {path:'adicionar-produto', component: AdicionarProdutoComponent},

]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
