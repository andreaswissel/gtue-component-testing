import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AddressAutocompleteComponent,
  MappedAddress,
} from '../address-autocomplete/address-autocomplete.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lego-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss'],
  standalone: true,
  imports: [CommonModule, AddressAutocompleteComponent, ReactiveFormsModule],
})
export class CheckoutFormComponent {
  checkoutForm = this.formBuilder.group({
    firstname: [''],
    lastname: [''],
    email: [''],
    address: this.formBuilder.group({
      street: [''],
      street_number: [''],
      city: [''],
      state: [''],
      zip: [''],
      country: [''],
    }),
  });

  constructor(private formBuilder: FormBuilder) {}

  handleAddressChange(event: MappedAddress) {
    console.log(event);
    this.checkoutForm.patchValue({
      address: {
        street: event['route'],
        street_number: event['street_number'],
        city: event['locality'],
        state: event['administrative_area_level_1'],
        zip: event['postal_code'],
        country: event['country'],
      },
    });
  }
}
