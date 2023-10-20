import type { Meta, StoryObj } from '@storybook/react'

import SuccessAlert from './index'

const meta: Meta<typeof SuccessAlert> = {
  title: 'Icon/Alert/Success',
  component: SuccessAlert,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    fill: { control: 'color' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
