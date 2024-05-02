import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  public searchProducts(keyword :String,page:Number=1 , size:Number=4) {
    //observe:'response' : pour aceder a la requete http afin de pouvoir lire attr  X-Total-Count
    return this.http.get(`http://localhost:8089/products?name_like=${keyword}&_page=${page}&_limit=${size}`
      ,{observe:'response'})

  }
  public checkProduct(product:Product):Observable<Product>{
    return this.http.patch<Product>(`http://localhost:8089/products/${product.id}`,
      {checked:!product.checked});
  }

  public deleteProduct(product:Product){
    return this.http.delete<Product>(`http://localhost:8089/products/${product.id}`);
  }

  saveProduct(product: Product) {
    return this.http.post<Product>(`http://localhost:8089/products`,
      product);
  }




  getProductById(productId: Number) {
    return this.http.get<Product>(`http://localhost:8089/products/${productId}`);

  }

  editProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`http://localhost:8089/products/${product.id}`,product);
  }
}
