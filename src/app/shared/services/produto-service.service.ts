import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Produto } from 'src/app/models/IProduto';
import { catchError, map, retry } from 'rxjs/operators';

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

  saveProduct(produto: Produto):Observable<Produto>{
    return this.http.post<Produto>(this.urlProdutos, JSON.stringify(produto), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
