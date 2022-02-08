import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardTotalComponent } from './components/card-total/card-total.component';
import { CardListaProdutosComponent } from './components/card-lista-produtos/card-lista-produtos.component'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { ProdutoServiceService } from './shared/services/produto-service.service';
import { OpcoesComponent } from './shared/opcoes/opcoes.component';
import { ModalComponent } from './shared/modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardTotalComponent,
    CardListaProdutosComponent,
    OpcoesComponent,
    ModalComponent
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
