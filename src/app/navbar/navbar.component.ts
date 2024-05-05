import { Component } from '@angular/core';
import {AppStateService} from "../services/app-state.service";
import {LoadingService} from "../services/loading.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  actions : Array<any> =[
    {
      title : "Home" , route:"/home",icon:"bi bi-house"
    } ,
    {
      title : "Products" , route:"/products",icon:"bi bi-archive"
    } ,
    {
      title : "New Products" , route:"/newProduct",icon:"bi bi-plus-circle"
    } ,
  ];
  currentAction:any;
 // public isLoading:boolean=false;

  constructor(public appState: AppStateService,
              public loadoingService:LoadingService) {
    /*
    this.loadoingService.isLoading$.subscribe(
      {
        next:isLoading => {
          this.isLoading=isLoading;
        }
      }
    );

     */

  }

  setCurrentAction(action: any) {
    this.currentAction = action;
  }


}
