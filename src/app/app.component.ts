import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//le nom de balise associe au  composant
  templateUrl: './app.component.html',//c est la partie html
  styleUrl: './app.component.css'//css
})
export class AppComponent {
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
