import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/product.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppStateService} from "../services/app-state.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit {
  productId!: Number;
  public productFormGroup!: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
              private productService:ProductService,
              private formBuilder: FormBuilder,
              private appState:AppStateService) {
  }
  ngOnInit(): void {
/*

this.appState.setProductsState({
  status:"LOADING"
})

 */
//snapshot prend une copie et aceder au param envoyer ds cette route
this.productId = this.activatedRoute.snapshot.params['id'];
this.productService.getProductById(this.productId).subscribe(
  {
    next: product => {
      this.productFormGroup = this.formBuilder.group({
        id: this.formBuilder.control(product.id),
        name: this.formBuilder.control(product.name,Validators.required),
        price: this.formBuilder.control(product.price,[Validators.required,Validators.min(100)]),
        checked: this.formBuilder.control(product.checked)


      })
      console.log(product)
/*

  this.appState.setProductsState({
    status:"LOADED"
  })

 */
},
error: err => {
  console.log(err)
/*

this.appState.setProductsState({
status:"ERROR",
errorMessage: err
})

 */
}
}
)
}

editProduct() {
/*

this.appState.setProductsState({
status:"LOADING"
})

 */
let product = this.productFormGroup.value;
this.productService.editProduct(product).subscribe (
{
next: data => {
console.log(data)
alert(JSON.stringify(data))
this.appState.setProductsState({
status:"LOADED"
})
},
error: err => {
console.log(err)
/*

this.appState.setProductsState({
status:"ERROR",
errorMessage: err

})
/*

 */

}
}
)

}
}
