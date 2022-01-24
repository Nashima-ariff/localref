import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any;
p1;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("assets/json/product.json").subscribe(data => {
      console.log(data);
      this.products = data["productlist"];
      console.log(this.products[0])
      this.p1 = this.products[0]
    })
  }

}
