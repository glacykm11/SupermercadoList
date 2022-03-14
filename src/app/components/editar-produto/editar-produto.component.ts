import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Produto } from 'src/app/shared/models/IProduto';
import { ProdutoServiceService } from 'src/app/shared/services/produto-service.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  produto = {} as Produto;
  produtos: Produto[];

  constructor(private produtoService: ProdutoServiceService){}

  ngOnInit(): void {}

  produtoForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    quantidade: new FormControl('', Validators.required),
    preco: new FormControl('', Validators.required),
  })

  editarProduto(form: any){
    this.produtoService.saveProduct(form.value).subscribe();
    window.alert('O produto foi adicionado na lista com sucesso!')
  }

}
