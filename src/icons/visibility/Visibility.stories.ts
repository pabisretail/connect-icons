import type { Meta, StoryObj } from '@storybook/react'
import Visibility from './index'

const meta: Meta<typeof Visibility> = {
  title: 'Icon/Visibility',
  component: Visibility,
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
