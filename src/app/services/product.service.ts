import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private host:String ="http://localhost:8089/products"

  constructor(private http:HttpClient) { }
  public searchProducts(keyword :String,page:Number=1 , size:Number=4) {
    //observe:'response' : pour aceder a la requete http afin de pouvoir lire attr  X-Total-Count
    return this.http.get(`${this.host}?name_like=${keyword}&_page=${page}&_limit=${size}`
      ,{observe:'response'})

  }
  public checkProduct(product:Product):Observable<Product>{
    return this.http.patch<Product>(`${this.host}/${product.id}`,
      {checked:!product.checked});
  }

  public deleteProduct(product:Product){
    return this.http.delete<Product>(`${this.host}/${product.id}`);
  }

  saveProduct(product: Product) {
    return this.http.post<Product>(`${this.host}`,
      product);
  }




  getProductById(productId: Number) {
    return this.http.get<Product>(`${this.host}/${productId}`);

  }

  editProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.host}/${product.id}`,product);
  }
}
