import type { Meta, StoryObj } from '@storybook/angular';
import { ZeinComponent } from './zein.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ZeinComponent> = {
  component: ZeinComponent,
  title: 'ZeinComponent',
};
export default meta;
type Story = StoryObj<ZeinComponent>;

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
