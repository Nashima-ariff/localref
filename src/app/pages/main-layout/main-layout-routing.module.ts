import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProductsComponent } from '../products/products.component';
import { ViewComponent } from '../products/view/view.component';
import { MainLayoutComponent } from './main-layout.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {
        path: '',
        component: HomeComponent
      }, {
        path: 'prodcut',
        component: ProductsComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'prodcut/view',
        component: ViewComponent
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
