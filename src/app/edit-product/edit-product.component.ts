import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/product.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
              private formBuilder: FormBuilder) {
  }
  ngOnInit(): void {
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
        },
        error: err => {
          console.log(err)
        }
      }
    )
  }

  editProduct() {
    let product = this.productFormGroup.value;
    this.productService.editProduct(product).subscribe (
      {
        next: data => {
          console.log(data)
          alert(JSON.stringify(data))
        },
        error: err => {
          console.log(err)
        }
      }
    )

  }
}
