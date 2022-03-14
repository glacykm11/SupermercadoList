import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardTotalComponent } from './components/card-total/card-total.component';
import { CardListaProdutosComponent } from './components/card-lista-produtos/card-lista-produtos.component'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { ProdutoServiceService } from './shared/services/produto-service.service';
import { AdicionarProdutoComponent } from './components/adicionar-produto/adicionar-produto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { EditarProdutoComponent } from './components/editar-produto/editar-produto.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardTotalComponent,
    CardListaProdutosComponent,
    AdicionarProdutoComponent,
    NavBarComponent,
    EditarProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [ProdutoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
