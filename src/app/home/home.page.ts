import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../products.service';
import {Product} from '../product.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  products: Product[];
  productView: boolean = true;

  constructor(
      private productServices: ProductsService
  ) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.products = this.productServices.getAllProducts();
  }
  changeProductView() {
    this.productView = !this.productView;
  }
}
