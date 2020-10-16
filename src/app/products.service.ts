import { Injectable } from '@angular/core';
import {Product} from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    {
      id: 'cpu1',
      jenis: 'CPU',
      foto: ['https://ecs7.tokopedia.net/img/cache/700/VqbcmM/2020/10/14/a35b01f1-ea3f-4f76-aab6-9d6df6b68bc2.jpg', 'https://www.powerplanetonline.com/cdnassets/procesador_intel_core_i9-9900k_3_6ghz_box_02_ad_l.jpg'],
      merek: 'Intel',
      merekProcessor: '',
      chipset: '',
      model: 'i9',
      baseClock: '2.4',
      boostClock: '5.3',
      jumlahCore: '8',
      jumlahThread: '16',
      speed: '',
      ukuran: '',
      harga: '5000000',
      stok: '5',
    },
    {
      id: 'gpu2',
      jenis: 'GPU',
      foto: ['https://ecs7-p.tokopedia.net/img/cache/200-square/VqbcmM/2020/9/23/d4cdd53d-43b7-468b-99a3-600afec1de89.jpg.webp'],
      merek: 'Nvidia',
      merekProcessor: '',
      chipset: '',
      model: 'GeForce RTX 3070',
      baseClock: '',
      boostClock: '',
      jumlahCore: '',
      jumlahThread: '',
      speed: '',
      ukuran: '',
      harga: '7000000',
      stok: '3',
    },
    {
      id: 'ram3',
      jenis: 'RAM',
      foto: ['https://ecs7.tokopedia.net/img/cache/700/product-1/2019/11/7/28462247/28462247_9ef622a0-6fc7-4359-9dec-d1a3dfd1963b_800_800'],
      merek: 'Kingston',
      merekProcessor: '',
      chipset: '',
      model: 'DDR4',
      baseClock: '',
      boostClock: '',
      jumlahCore: '',
      jumlahThread: '',
      speed: '21000',
      ukuran: '8',
      harga: '600000',
      stok: '10',
    },
    {
      id: 'motherboard1',
      jenis: 'Motherboard',
      foto: ['https://cf.shopee.co.id/file/1a1bb841576a5bb701da9fc8237d8c13'],
      merek: 'Asus',
      merekProcessor: 'Intel',
      chipset: 'H61',
      model: 'LGA 1155',
      baseClock: '',
      boostClock: '',
      jumlahCore: '',
      jumlahThread: '',
      speed: '',
      ukuran: '',
      harga: '500000',
      stok: '8',
    },
  ];

  constructor() { }

  getAllProducts() {
    return [...this.products];
  }

  getProduct(id: string) {
    return {
      ...this.products.find(product => {
        return product.id === id;
      })
    };
  }

  deleteProduct(id: string) {
    console.log('deleted:'+id);
    this.products = this.products.filter(
        product => {
          return product.id !== id;
        }
    );
  }

  addProduct(newProduct: Product) {
    this.products.push(
        {
          id: newProduct.id,
          jenis: newProduct.jenis,
          foto: newProduct.foto,
          merek: newProduct.merek,
          merekProcessor: newProduct.merekProcessor,
          chipset: newProduct.chipset,
          model: newProduct.model,
          baseClock: newProduct.baseClock,
          boostClock: newProduct.boostClock,
          jumlahCore: newProduct.jumlahCore,
          jumlahThread: newProduct.jumlahThread,
          speed: newProduct.speed,
          ukuran: newProduct.ukuran,
          harga: newProduct.harga,
          stok: newProduct.stok,
        }
    );
  }

  editProduct(newProduct: Product) {
    this.products.forEach((product) => {
      if (product.id === newProduct.id) {
        product.id = newProduct.id;
        product.jenis = newProduct.jenis;
        product.foto = newProduct.foto;
        product.merek = newProduct.merek;
        product.merekProcessor = newProduct.merekProcessor;
        product.chipset = newProduct.chipset;
        product.model = newProduct.model;
        product.baseClock = newProduct.baseClock;
        product.boostClock = newProduct.boostClock;
        product.jumlahCore = newProduct.jumlahCore;
        product.jumlahThread = newProduct.jumlahThread;
        product.speed = newProduct.speed;
        product.ukuran = newProduct.ukuran;
        product.harga = newProduct.harga;
        product.stok = newProduct.stok;
      }
    });
  }

  getProductLength() {
    return this.products.length;
  }
}
