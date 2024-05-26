import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {NewProductComponent} from "./new-product/new-product.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {LoginComponent} from "./login/login.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";

const routes: Routes = [
  {
    path:"admin", component: AdminTemplateComponent,children:[
            { path:"home", component: HomeComponent},
            { path:"products", component: ProductsComponent},
            { path:"newProduct", component: NewProductComponent},
            //on a ajouter :id pour anoncer que la route contient des parameters
            { path:"editProduct/:id", component: EditProductComponent}
    ]
  },

  {path:"login" , component: LoginComponent},
  {path:"",redirectTo:"login",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
