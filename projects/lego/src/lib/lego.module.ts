import { NgModule } from '@angular/core';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { AddressAutocompleteComponent } from './address-autocomplete/address-autocomplete.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';

@NgModule({
  imports: [
    AddressAutocompleteComponent,
    AutocompleteComponent,
    CheckoutFormComponent,
  ],
  exports: [
    AddressAutocompleteComponent,
    AutocompleteComponent,
    CheckoutFormComponent,
  ],
})
export class LegoModule {}
