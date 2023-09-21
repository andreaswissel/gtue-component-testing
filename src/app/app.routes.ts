import { Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { SuccessComponent } from './success/success.component';

export const routes: Routes = [
  { path: '', redirectTo: 'order', pathMatch: 'full' },
  { path: 'order', component: OrderComponent },
  { path: 'success', component: SuccessComponent },
];
