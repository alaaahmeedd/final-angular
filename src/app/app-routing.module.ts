import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  EditprofileComponent} from './editprofile/editprofile.component';
import {  CartComponent} from './cart/cart.component';
import {  ProductlistComponent } from './productlist/productlist.component';
import {  RegisterComponent } from '../app/register/register.component';
import { CartdetailsComponent } from './cartdetails/cartdetails.component';



const routes: Routes = [
{path :'editprofile' ,component:EditprofileComponent },
{path :'cart' ,component:CartComponent },
{path :'productlist' ,component:ProductlistComponent },
{path:'register', component: RegisterComponent},
{path:'cartdetails', component: CartdetailsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



