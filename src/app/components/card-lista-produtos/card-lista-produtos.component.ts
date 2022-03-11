import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/shared/models/IProduto';
import { ProdutoServiceService } from 'src/app/shared/services/produto-service.service';

@Component({
  selector: 'app-card-lista-produtos',
  templateUrl: './card-lista-produtos.component.html',
  styleUrls: ['./card-lista-produtos.component.css']
})
export class CardListaProdutosComponent implements OnInit {

  produtos: Produto[];
  produto: Produto;
  @Output() resultado = new EventEmitter<any>();
  

  constructor(private produtoService: ProdutoServiceService) { }
  

  ngOnInit() {
    this.getProdutos();
  }

  getProdutos(){
    this.produtoService.getProdutos()
    .subscribe(
      (response:Produto[]) => {
        this.produtos = response;
        this.totalProdutos();
      }
    )
  }

  getProduto(id: number){
    this.produtoService.getProdutoById(id)
    .subscribe(
      (response:Produto) => {
        this.produto = response;
        
      }
    )
  }
 
  totalProdutos(){
    let soma = 0
    this.produtos.forEach(produto => {
      soma += produto.preco * produto.quantidade
      //console.log('A soma é == ', soma);
      
    })
    
    this.resultado.emit(soma)
    console.log(this.resultado);
  }
 
}
