import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartdetails',
  templateUrl: './cartdetails.component.html',
  styleUrls: ['./cartdetails.component.css']
})
export class CartdetailsComponent implements OnInit {
  proarr:any;
  constructor() { }

  ngOnInit(): void {

    if(localStorage.getItem("productsData") != null){
      this.proarr=JSON.parse(localStorage.getItem("productsData"));
    }
    
  }


}
