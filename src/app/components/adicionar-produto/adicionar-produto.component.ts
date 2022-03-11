import { ProdutoServiceService } from '../../shared/services/produto-service.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Produto } from 'src/app/shared/models/IProduto';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.css']
})
export class AdicionarProdutoComponent implements OnInit {
  produto = {} as Produto;
  produtos: Produto[];

  constructor(private produtoService: ProdutoServiceService){}

  ngOnInit(): void {}

  produtoForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    quantidade: new FormControl('', Validators.required),
    preco: new FormControl('', Validators.required),
  })

  adicionarProduto(form: any){
    this.produtoService.saveProduct(form.value).subscribe();
    window.alert('O produto foi adicionado na lista com sucesso!')
  }
}
