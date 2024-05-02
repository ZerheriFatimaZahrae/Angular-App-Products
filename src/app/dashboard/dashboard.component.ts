import { Component } from '@angular/core';
import {AppStateService} from "../services/app-state.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(public appState: AppStateService) {
  }

  totalCheckedProducts() {
    //filtrer la list des products ssi checked==true
    let checkedProduct= this.appState.productState.products.filter((p:any)=>p.checked==true)
    return checkedProduct.length
  }
}
