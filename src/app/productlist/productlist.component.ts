import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  data: any; 
  productsArr: any;

  constructor( private dataservice : DataService) { }

  ngOnInit(): void {
    this.dataservice.getProductslist().subscribe({
      next: (data) => {
        console.log('success:' , data);
        this.data = data;
        console.log(this.data = data);

      },
      error : (msg) => {
        console.log('error:' , msg);
      },
    });
  }
  addCard(proData)
{
     if(localStorage.getItem("productsData") == null)
      {
        this.productsArr = [];
        this.productsArr.push(proData);
        localStorage.setItem("productsData" , JSON.stringify(this.productsArr));

      }
      else
      {
        this.productsArr.push(proData)
        localStorage.setItem("productsData" , JSON.stringify(this.productsArr));
      }


    }

}



// export class ProductlistComponent implements OnInit {
//   products: Array<object> = [];
//   constructor(private http: DataService) {}
//   _getProducts(): void {
//     this.http.getAllProductlist().subscribe((data: any) => {
//       this.products = data.data;
//       console.log(this.products);
//     });
//   }
//   _addItemToCart( id, quantity): void {
//     let payload = {
//       productId: id,
//       quantity,
//     };
//     this.http.addToCart(payload).subscribe(() => {
//       this._getProducts();
//       alert('Product Added');
//     });
//   }
//   ngOnInit(): void {
//     this._getProducts();
//   }
// }