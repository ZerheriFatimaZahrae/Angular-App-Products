import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import Array from "$GLOBAL$";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products: Array<any> = [];
  constructor(private productService:ProductService) {

  }


  handleCheckProduct(product: any) {
    //changer les donnees de file json , en envoyant une requete patch avec l attribut update
    this.productService.checkProduct(product)
      .subscribe(
        {
          next :updatedProduct => {
            product.checked=!product.checked;
            //this.getProducts()
          }
        }
      )

  }

  getProducts(){
    this.productService.getProducts().subscribe(
      {
        next:data => {
          this.products=data
          console.log("data"+data)
        },
        error : err=>{
          console.log(err)
        }
      }
    )
  }

  //la 1er methode qui sera executer apres l affichage de component
  //telecharger data par file json apres l execution de cmd: json-server -w data/db.json -p 8089
  ngOnInit(): void {
   this.getProducts();
   }

}
