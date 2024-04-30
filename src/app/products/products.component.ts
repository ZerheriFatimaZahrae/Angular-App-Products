import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import Array from "$GLOBAL$";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  public products :Array<Product>=[];
  public keyword : String="" ;
  // ajout de ! pour que ts ignore la intialisation de var
  constructor(private productService:ProductService) {

  }


  handleCheckProduct(product: Product) {
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

    this.productService.getProducts(1,3).subscribe(
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

    //this.products=this.productService.getProducts()

  }

  //la 1er methode qui sera executer apres l affichage de component
  //telecharger data par file json apres l execution de cmd: json-server -w data/db.json -p 8089
  ngOnInit(): void {
   this.getProducts();
   }

  handleDeleteProduct(product: Product) {
    if (confirm("Are you sure you want to delete this product")) {
      this.productService.deleteProduct(product).subscribe(
        {
          next: value => {
            //this.getProducts()
            this.products = this.products.filter((p: Product) => p.id !== product.id)
          }
        }
      );
    }
  }

  handleSearchProduct() {

    this.productService.searchProduct(this.keyword).subscribe(
      {
        next: data => {
          this.products = data ;
          console.log("data" + data)
          console.log("product:"+this.products)
        },
        error: err => {
          console.log(err)
        }
      }
    )
  }
}
