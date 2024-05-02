import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import Array from "$GLOBAL$";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {AppStateService} from "../services/app-state.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{


  constructor(private productService:ProductService,
              private router:Router,
              public appState:AppStateService) {

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

  searchProducts(){

    this.productService.searchProducts(this.appState.productState.keyword,this.appState.productState.currentPage,this.appState.productState.pageSize)
      .subscribe(
      {
        next:resp => {
          this.appState.productState.products=resp.body //on a return un http response pour savoir les produits on va aceder resp.body
          let totalProducts=parseInt(resp.headers.get('x-total-count')!)
          // @ts-ignore
          this.appState.productState.totalPages = Math.floor(totalProducts / this.appState.productState.pageSize)
          // @ts-ignore
          if (totalProducts % this.appState.productState.pageSize != 0) {
            // @ts-ignore
            this.appState.productState.totalPages += 1;
          }
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
   this.searchProducts();
   }

  handleDeleteProduct(product: Product) {
    if (confirm("Are you sure you want to delete this product")) {
      this.productService.deleteProduct(product).subscribe(
        {
          next: value => {
            //this.getProducts()
            this.appState.productState.products =
              this.appState.productState.products.filter((p: any) => p.id !== product.id)
          }
        }
      );
    }
  }



  handleGetPage(page: number) {
    this.appState.productState.currentPage = page;
    this.searchProducts()
  }

  handleEditProduct(product: Product) {
    this.router.navigateByUrl(`/editProduct/${product.id}`)
  }
}
