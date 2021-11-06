import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productList } from '../liste';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


  productList = productList;
  id:any;
  constructor(
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(oui =>{
      this.id = oui["productId"];
    });
  }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['productId'];
    // console.log(this.id);
  }

  

}
