import { Injectable } from '@angular/core';
import { of, delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor() {}

  placeOrder(order: any): Observable<{ redirectUrl: string }> {
    return of({ redirectUrl: `/success` }).pipe(delay(500));
  }
}
