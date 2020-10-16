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
      foto: ['https://images-na.ssl-images-amazon.com/images/I/614OeWBEtZL._AC_SL1000_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81xwZxY53TL._AC_SX466_.jpg'],
      merek: 'Intel',
      merekProcessor: '',
      chipset: '',
      model: 'i9 X-series',
      baseClock: '3',
      boostClock: '6',
      jumlahCore: '16',
      jumlahThread: '16',
      speed: '',
      ukuran: '',
      harga: '1505000',
      stok: '10',
    },
    {
      id: 'gpu2',
      jenis: 'GPU',
      foto: ['https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-04-24-17-31/digitalfoundry-best-graphics-card-every-amd-nvidia-tested-7001-1587745896837.jpg/EG11/thumbnail/750x422/format/jpg/quality/60'],
      merek: 'Nvidia',
      merekProcessor: '',
      chipset: '',
      model: 'GeForce RTX 2080Ti',
      baseClock: '',
      boostClock: '',
      jumlahCore: '',
      jumlahThread: '',
      speed: '',
      ukuran: '',
      harga: '1000000',
      stok: '2',
    },
    {
      id: 'ram3',
      jenis: 'RAM',
      foto: ['https://ecs7.tokopedia.net/img/cache/700/product-1/2020/5/12/39231619/39231619_b9aee621-c948-4423-90fc-05c5cf64bb74_2048_2048', 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/6/13/39231619/39231619_e3c79c68-a0ac-49d4-b84e-0acee7455ab8_600_600', 'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/5/12/39231619/39231619_2d51c19e-b25e-4369-ab15-42ec62ac9d67_2048_2048'],
      merek: 'Vgen',
      merekProcessor: '',
      chipset: '',
      model: 'Tsunami DDR4',
      baseClock: '',
      boostClock: '',
      jumlahCore: '',
      jumlahThread: '',
      speed: '2666',
      ukuran: '7',
      harga: '599000',
      stok: '6',
    },
    {
      id: 'motherboard1',
      jenis: 'Motherboard',
      foto: ['https://ecs7.tokopedia.net/img/cache/700/product-1/2019/9/4/5373285/5373285_be8a4729-3f89-4a57-ae95-d51ffb365bbe_800_800', 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/9/4/5373285/5373285_9a3ef94d-7a2f-482d-a870-682d96ce6ef6_800_800'],
      merek: 'MSI',
      merekProcessor: 'AMD',
      chipset: 'AM4',
      model: 'B450 TOMAHAWK MAX Ryzen AM4 ATX Form Factor',
      baseClock: '',
      boostClock: '',
      jumlahCore: '',
      jumlahThread: '',
      speed: '',
      ukuran: '',
      harga: '1999000',
      stok: '10',
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
