import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardTotalComponent } from './components/card-total/card-total.component';
import { CardListaProdutosComponent } from './components/card-lista-produtos/card-lista-produtos.component'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { ProdutoServiceService } from './shared/services/produto-service.service';
import { AdicionarProdutoComponent } from './components/adicionar-produto/adicionar-produto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardTotalComponent,
    CardListaProdutosComponent,
    AdicionarProdutoComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ProdutoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
