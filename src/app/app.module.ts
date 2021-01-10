import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { SubmitorderComponent } from './submitorder/submitorder.component';
import { CartdropdownComponent } from './cartdropdown/cartdropdown.component';
import { CartdetailsComponent } from './cartdetails/cartdetails.component';
import {HttpClientModule} from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { RegisterComponent } from './register/register.component';
// import { CartServiceComponent } from './cartservice/cartservice.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductlistComponent,
    ProductdetailsComponent,
    SubmitorderComponent,
    CartdropdownComponent,
    CartdetailsComponent,
    CartComponent,
    EditprofileComponent,
    RegisterComponent,
    // CartServiceComponent
    //  App,
    //   FilterPipe 

    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbPaginationModule, 
    NgbAlertModule, 
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    // RouterModule.forRoot([
    //   { path: '', component: ProductlistComponent },
    //   { path: 'products/:productId', component: ProductdetailsComponent },
    //   { path: 'cart', component: CartComponent },
    // ])
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
