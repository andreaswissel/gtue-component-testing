import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

export enum AddressType {
  ESTABLISHMENT = 'establishment',
  ADDRESS = 'address',
  GEOCODE = 'geocode',
}

export type MappedAddress = {
  [key: string]: string;
};

@Component({
  selector: 'lego-address-autocomplete',
  templateUrl: './address-autocomplete.component.html',
  styleUrls: ['./address-autocomplete.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class AddressAutocompleteComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) placeholder!: string;
  @Input() address?: string;
  @Input() countryRestrictions: string[] = ['US', 'DE'];
  @Input() adressTypes: AddressType[] = [
    AddressType.ESTABLISHMENT,
    AddressType.GEOCODE,
  ];

  @Output() setAddress: EventEmitter<MappedAddress> = new EventEmitter();
  @ViewChild('addressInput', { static: true }) addressInput: any;

  autocompleteInput?: string;
  mappedAddress?: MappedAddress;

  ngOnInit() {
    this.registerListener();
    this.addressInput.nativeElement.value = this.address ? this.address : '';
  }

  registerListener() {
    const autocomplete = new google.maps.places.Autocomplete(
      this.addressInput.nativeElement,
      {
        componentRestrictions: { country: this.countryRestrictions },
        types: this.adressTypes,
        fields: ['address_components', 'geometry', 'icon', 'name'],
      }
    );
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      this.addressText = place.address_components;
      this.setAddress.emit(this.addressText);
    });
  }

  set addressText(
    addressComponents: google.maps.GeocoderAddressComponent[] | undefined
  ) {
    if (!!addressComponents) {
      this.mappedAddress = addressComponents
        .map((item: google.maps.GeocoderAddressComponent) => {
          return { [item.types[0]]: item.long_name };
        })
        .reduce((prev, curr, currentIndex, {}) => {
          return { ...prev, ...curr };
        });
    }
  }

  get addressText(): MappedAddress | undefined {
    return this.mappedAddress;
  }
}
