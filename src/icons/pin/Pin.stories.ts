import type { Meta, StoryObj } from '@storybook/react'
import Pin from './index'

const meta: Meta<typeof Pin> = {
  title: 'Icon/Pin',
  component: Pin,
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
