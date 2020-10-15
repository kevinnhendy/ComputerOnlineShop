import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'add-product',
    loadChildren: () => import('./add-product/add-product.module').then( m => m.AddProductPageModule)
  },
  {
    path: 'edit-product',
    loadChildren: () => import('./edit-product/edit-product.module').then( m => m.EditProductPageModule)
  },
  {
    path: 'detail-product',
    loadChildren: () => import('./detail-product/detail-product.module').then( m => m.DetailProductPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
