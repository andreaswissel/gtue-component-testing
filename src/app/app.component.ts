import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OrderComponent } from './order/order.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [OrderComponent, RouterOutlet],
  standalone: true,
})
export class AppComponent {
  title = 'checkout-demo-app';
}
