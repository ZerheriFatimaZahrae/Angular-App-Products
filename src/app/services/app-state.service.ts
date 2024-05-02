import { Injectable } from '@angular/core';

import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
//on a creer ce service pour faciliter la communication entre les different components
//au quel on va stocker ts les attrs des components ds ce service
//les attrs vont etre partager entre ts les components
export class AppStateService {


  public productState :any={

    products :[],
    keyword : "" ,
    pageSize:3,
    currentPage:1,
    totalPages:0,
    totalProducts:0,
    status:"",
    errorMessage:""
  }
  public setProductsState(state :any){
    //faire une copie par ... des elements de productState puis l element ds state sera ecraser
    this.productState={...this.productState,...state};
  }

  constructor() { }
}
