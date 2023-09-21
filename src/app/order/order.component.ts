import { Component } from '@angular/core';
import { ButtonComponent, CheckoutFormComponent } from '@lego/components';
import { OrderService } from './order.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  imports: [CheckoutFormComponent, ButtonComponent, NgIf],
  standalone: true,
})
export class OrderComponent {
  isLoading = false;

  constructor(private orderService: OrderService, private router: Router) {}

  submitForm() {
    this.isLoading = true;
    this.orderService.placeOrder({}).subscribe((response) => {
      this.router.navigateByUrl(response.redirectUrl);
    });
  }
}
