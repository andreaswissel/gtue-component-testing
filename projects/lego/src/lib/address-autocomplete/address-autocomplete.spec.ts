import { AddressAutocompleteComponent } from './address-autocomplete.component';
import { MOCK_ADDRESS_COMPONENTS, MOCK_MAPPED_ADDRESS } from './address.mocks';

describe('AddressAutocompleteComp', () => {
  // write a test that checks if mappedAddress is empty at first
  it('should have empty mappedAddress at first', () => {
    const comp = new AddressAutocompleteComponent();
    expect(comp.mappedAddress).withContext('empty at first').toBeUndefined();

    comp.addressText = MOCK_ADDRESS_COMPONENTS;

    expect(comp.mappedAddress)
      .withContext('not empty after addressText is set')
      .toEqual(MOCK_MAPPED_ADDRESS);

    expect(comp.addressText).toEqual(comp.mappedAddress);
  });
});
