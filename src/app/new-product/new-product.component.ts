import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../services/product.service";
import {validateAndRewriteCoreSymbol} from "@angular/compiler-cli/src/ngtsc/imports";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent implements OnInit {

  public productForm!: FormGroup;
  constructor(private formBuilder :FormBuilder , private productService:ProductService) {

  }
  ngOnInit(): void {
    this.productForm=this.formBuilder.group({
      name:this.formBuilder.control('',[Validators.required]),
      price:this.formBuilder.control(0.0 ,[Validators.required]),
      checked:this.formBuilder.control(false),
    })
  }

  saveProduct() {
    let product=this.productForm.value
    this.productService.saveProduct(product).subscribe(
      {
        next:data => {
          console.log(data)
          alert(JSON.stringify(data))
        },
        error : err=>{
          console.log(err)
        }
      }
    )
  }
}
