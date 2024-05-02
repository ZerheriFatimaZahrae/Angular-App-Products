import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit {
  productId!: Number;
  constructor(private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    //snapshot prend une copie et aceder au param envoyer ds cette route
    this.productId = this.activatedRoute.snapshot.params['id'];
  }

}
