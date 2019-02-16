import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CartMaintenanceComponent } from './cart/cart-maintenance/cart-maintenance.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSummaryComponent } from './order/order-summary/order-summary.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path:  'cart',
    component: CartMaintenanceComponent
  },
  {
    path: 'check-out',
    component: CheckOutComponent
  },
  {
    path: 'order-summary',
    component: OrderSummaryComponent
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
