import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProductsService} from '../../products.service';
import {AlertController, LoadingController, NavController, ToastController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {
  private product: Product;
  private productId: string;

  constructor(
      private productServices: ProductsService,
      private alertController: AlertController,
      private navController: NavController,
      private activatedRoute: ActivatedRoute,
      private loadingController: LoadingController,
      private toastController: ToastController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('productId')) {
        return;
      }
      this.productId = paramMap.get('productId');
      this.product = this.productServices.getProduct(this.productId);
    });
  }

  editProduct(form: NgForm) {
    let newProduct: Product;
    if (form.value.foto.includes(',')) {
      form.value.foto = form.value.foto.split(',');
    }

    if (this.productId.includes("cpu")) {
      newProduct = new Product(
          this.product.id,
          'CPU',
          form.value.foto,
          form.value.merek,
          '',
          '',
          form.value.model,
          form.value.baseClock,
          form.value.boostClock,
          form.value.jumlahCore,
          form.value.jumlahThread,
          '',
          '',
          form.value.harga,
          form.value.stok);
    } else if (this.productId.includes("gpu")) {
      newProduct = new Product(
          this.product.id,
          'GPU',
          form.value.foto,
          form.value.merek,
          '',
          '',
          form.value.model,
          '',
          '',
          '',
          '',
          '',
          '',
          form.value.harga,
          form.value.stok);
    } else if (this.productId.includes("motherboard")) {
      newProduct = new Product(
          this.product.id,
          'Motherboard',
          form.value.foto,
          form.value.merek,
          form.value.merekProcessor,
          form.value.chipset,
          form.value.model,
          '',
          '',
          '',
          '',
          '',
          '',
          form.value.harga,
          form.value.stok);
    } else {
      newProduct = new Product(
          this.product.id,
          'RAM',
          form.value.foto,
          form.value.merek,
          '',
          '',
          form.value.model,
          '',
          '',
          '',
          '',
          form.value.speed,
          form.value.ukuran,
          form.value.harga,
          form.value.stok);
    }

    this.productServices.editProduct(newProduct);
    this.navController.navigateBack('admin');
  }

  async presentAlert(form: NgForm) {
    const alert = await this.alertController.create({
      header: 'Produk: ' + form.value.merek + ' ' + form.value.model,
      message: 'Edit produk '  + form.value.merek + ' ' + form.value.model + ' ?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel'
        },
        {
          text: 'Edit',
          handler: () => {
            this.presentLoading().then(() => {
              this.editProduct(form);
              this.presentToast();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Mengedit produk...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Produk berhasil diedit!',
      color: 'primary',
      duration: 2000
    });
    await toast.present();
  }
}
