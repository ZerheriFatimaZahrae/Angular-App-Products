import { Component } from '@angular/core';

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
  currentAction:any

  setCurrentAction(action: any) {
    this.currentAction = action;
  }

}
