import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public totalProdutos:number ;

  constructor() { }

  ngOnInit() {
  }

  total(resultado){
    this.totalProdutos = resultado
    console.log('o resultado é ==',resultado);
    
  }
}
