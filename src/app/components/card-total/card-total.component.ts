import { CardListaProdutosComponent } from './../card-lista-produtos/card-lista-produtos.component';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-total',
  templateUrl: './card-total.component.html',
  styleUrls: ['./card-total.component.css']
})
export class CardTotalComponent implements OnInit {
  
  @Output() resultado:number;
  constructor() { }
  
  ngOnInit() {
    console.log(this.resultado);
    
  }

}
