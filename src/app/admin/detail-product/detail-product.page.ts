import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../products.service';
import {AlertController, NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.page.html',
  styleUrls: ['./detail-product.page.scss'],
})
export class DetailProductPage implements OnInit {
  private loadedItem;
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(
      private productServices: ProductsService,
      private alertController: AlertController,
      private navController: NavController,
      private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('productId')) {
        return;
      }
      const itemId = paramMap.get('productId');
      this.loadedItem = this.productServices.getProduct(itemId);
      console.log(this.loadedItem);
    });
  }

}
