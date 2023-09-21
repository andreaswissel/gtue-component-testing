import {
  StoryObj,
  applicationConfig,
  moduleMetadata,
} from '@storybook/angular';
import { AutocompleteComponent } from './autocomplete.component';
import { userEvent, within, screen } from '@storybook/testing-library';
import { provideAnimations } from '@angular/platform-browser/animations';

const options = ['Steak sandwhich', 'BBQ ribs', 'Hamburger', 'French fries'];

export default {
  title: 'Components/Forms/Autocomplete',
  component: AutocompleteComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};

export const Default: StoryObj<AutocompleteComponent> = {
  args: {
    label: 'Autocomplete',
    placeholder: 'Enter favorite food',
    options,
  },
};

export const WithAutomatedTest: StoryObj<AutocompleteComponent> = {
  args: {
    ...Default.args,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByRole('combobox');
    await userEvent.click(input);
    await userEvent.type(input, `Steak sandw {enter}`, { delay: 50 });

    const result = await screen.findByText('Steak sandwhich');

    await userEvent.click(result);
  },
};
