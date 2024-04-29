import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Array<any> = [
    {
      id:1,name: 'Computer',checked:false,price:20000
    },
    {
      id:2,name: 'Printer',checked:true,price:50000,
    },
    {
      id:3,name: 'Phone',checked:false,price:20000
    }
  ];

  handleCheckProduct(product: any) {
    product.checked=!product.checked;
  }
}
