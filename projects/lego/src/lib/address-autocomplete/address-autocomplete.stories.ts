import { StoryObj } from '@storybook/angular';
import {
  AddressAutocompleteComponent,
  AddressType,
} from './address-autocomplete.component';
import { MOCK_CLEAR_ADDRESS } from './address.mocks';
import { userEvent, within, screen } from '@storybook/testing-library';

export default {
  title: 'Components/Forms/Address Autocomplete',
  component: AddressAutocompleteComponent,
};

export const Default: StoryObj<AddressAutocompleteComponent> = {
  args: {
    label: 'Address',
    placeholder: 'Enter your address',
    adressTypes: [AddressType.ADDRESS],
  },
};

export const WithAddress: StoryObj<AddressAutocompleteComponent> = {
  args: {
    ...Default.args,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByLabelText('Address');
    await userEvent.type(input, `${MOCK_CLEAR_ADDRESS} {enter}`, { delay: 50 });
    await userEvent.click(input);

    const result = await screen.findAllByText('Anacortes Ferry Terminal');

    await userEvent.click(result[0]);
  },
};
