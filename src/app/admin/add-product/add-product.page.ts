import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, NavController, ToastController} from '@ionic/angular';
import {ProductsService} from '../../products.service';
import {NgForm} from '@angular/forms';
import {Product} from '../../product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {
  constructor(
      private productServices: ProductsService,
      private alertController: AlertController,
      private navController: NavController,
      private loadingController: LoadingController,
      private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  addNewProduct(form: NgForm) {
    let newProduct: Product;
    form.value.foto = form.value.foto.split(',');

    switch (form.value.jenis) {
      case 'CPU':
        newProduct = new Product(
            `cpu${this.productServices.getProductLength() + 1}`,
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
        break;
      case 'GPU':
        newProduct = new Product(
            `gpu${this.productServices.getProductLength() + 1}`,
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
        break;
      case 'Motherboard':
        newProduct = new Product(
            `motherboard${this.productServices.getProductLength() + 1}`,
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
        break;
      case 'RAM':
        newProduct = new Product(
            `ram${this.productServices.getProductLength() + 1}`,
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
        break;
    }

    this.productServices.addProduct(newProduct);
    this.navController.navigateBack('admin');
  }

  async presentAlert(form: NgForm) {
    const alert = await this.alertController.create({
      header: 'Produk baru: ' + form.value.merek + ' ' + form.value.model,
      message: 'Tambahkan produk '  + form.value.merek + ' ' + form.value.model + ' ?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel'
        },
        {
          text: 'Tambahkan',
          handler: () => {
            this.presentLoading().then(() => {
              this.addNewProduct(form);
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
      message: 'Menambahkan produk baru...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Produk berhasil ditambahkan!',
      color: 'primary',
      duration: 2000
    });
    await toast.present();
  }
}
