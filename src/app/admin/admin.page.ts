import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';
import {ProductsService} from '../products.service';
import {AlertController, IonItemSliding, LoadingController, NavController, ToastController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  products: Product[];
  multiDelete = false;

  constructor(
      private productServices: ProductsService,
      private alertController: AlertController,
      private navController: NavController,
      private loadingController: LoadingController,
      private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.products = this.productServices.getAllProducts();
  }

  editProduct(productId, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.navController.navigateForward(['admin/edit/', productId]);
  }

  deleteProduct(products, isMultiDelete) {
    if (isMultiDelete) {
      products = products.filter((x) => x.isChecked === true);
      products.forEach(product => {
        product.isChecked = false;
        this.productServices.deleteProduct(product.id);
        let index = this.products.indexOf(product);
        this.products.splice(index, 1);
      });
      this.changeDeleteStatus();
    } else {
      this.productServices.deleteProduct(products.id);
      let index = this.products.indexOf(products);
      this.products.splice(index, 1);
    }
  }

  async presentAlert(products, slidingItem: IonItemSliding = null, isMultiDelete = false) {
    if (slidingItem != null) {
      slidingItem.close();
    }

    const alert = await this.alertController.create({
      header: 'Produk yang dipilih akan dihapus',
      message: 'Lanjutkan hapus produk?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          handler: () => {
            if (isMultiDelete) {
              this.changeDeleteStatus();
              products.forEach(product => {
                if (product.isChecked === true) {
                  product.isChecked = false;
                }
              });
            }
          }
        },
        {
          text: 'Hapus',
          handler: () => {
            this.presentLoading().then(() => {
              this.deleteProduct(products, isMultiDelete);
              this.presentToast();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  changeDeleteStatus() {
    if (this.multiDelete === true) {
      this.multiDelete = false;
    } else {
      this.multiDelete = true;
    }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Menghapus produk yang dipilih...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Produk berhasil dihapus',
      color: 'primary',
      duration: 2000
    });
    await toast.present();
  }
}
