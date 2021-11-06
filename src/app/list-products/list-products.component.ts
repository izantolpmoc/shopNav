import { Component, OnInit } from '@angular/core';
import { productList } from '../liste';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productList = productList;

  goToBottom(){
    window.scrollTo(0,document.body.scrollHeight);
  }
}
