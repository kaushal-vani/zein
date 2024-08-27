import type { Meta, StoryObj } from '@storybook/angular';
import { FormAlertComponent } from './form-alert.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
 
const meta: Meta<FormAlertComponent> = {
  component: FormAlertComponent,
  title: 'Forms/FormAlertComponent',
};
export default meta;
type Story = StoryObj<FormAlertComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/zein works!/gi)).toBeTruthy();
  },
};
