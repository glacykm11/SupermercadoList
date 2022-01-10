import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/models/IProduto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoServiceService {
  constructor(private http : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  urlProdutos: string = 'http://localhost:3000/produtos'

  getProdutos():Observable<Produto[]>{
     return this.http.get<Produto[]>(this.urlProdutos).pipe(map((response:Produto[]) => response))
  }

  getProdutoById(id: number):Observable<Produto>{
    return this.http.get<Produto>(this.urlProdutos + '/' + id).pipe(map((response:Produto) => response))
  }
}
