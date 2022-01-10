import { Component, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/models/IProduto';
import { ProdutoServiceService } from 'src/app/shared/services/produto-service.service';

@Component({
  selector: 'app-card-lista-produtos',
  templateUrl: './card-lista-produtos.component.html',
  styleUrls: ['./card-lista-produtos.component.css']
})
export class CardListaProdutosComponent implements OnInit {

  produtos: Produto[];
  produto: Produto;
  @Input() resultado: any;
  constructor(private produtoService: ProdutoServiceService) { }
  
  ngOnInit() {
    this.getProdutos()
    setTimeout( () => {
      this.totalProdutos()
    },1000)
    
  }
  getProdutos(){
    this.produtoService.getProdutos()
    .subscribe(
      (response:Produto[]) => {
        console.log(response);
        this.produtos = response;
      }
    )
  }

  getProduto(id: number){
    this.produtoService.getProdutoById(id)
    .subscribe(
      (response:Produto) => {
        console.log(response);
        this.produto = response;
        
      }
    )
  }
 
  totalProdutos(){
    let soma = 0
    this.produtos.forEach(produto => {
      soma += produto.preco * produto.quantidade
      this.resultado = soma
    })
    console.log(this.resultado);
  }
 
}
