import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  proarr:any;
  constructor() { }

  ngOnInit(): void {
  
  if(localStorage.getItem("productsData") != null){
    this.proarr=JSON.parse(localStorage.getItem("productsData"));
  }

}
}

// import { Component, OnInit } from '@angular/core';
// import {DataService} from '../service/data.service';
// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css'],
// })
// export class CartComponent implements OnInit {
//   carts;
//   cartDetails;
//   constructor(private http: DataService) {}
//   _getCart(): void {
//     this.http.getCartItems().subscribe((data: any) => {
//       this.carts = data.data;
//       // this.cartDetails = data.data;
//       console.log(this.carts);
//     });
//   }
//   _increamentQTY(id, quantity): void {
//     const payload = {
//       productId: id,
//       quantity,
//     };
//     this.http.increaseQty(payload).subscribe(() => {
//       this._getCart();
//       alert('Product Added');
//     });
//   }
//   _emptyCart(): void {
//     this.http.emptyCart().subscribe(() => {
//       this._getCart();
//       alert('Cart Emptied');
//     });
//   }
//   ngOnInit(): void {
//     this._getCart();
//   }
// }
