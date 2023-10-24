import type { Meta, StoryObj } from '@storybook/react'
import Notification from './index'

const meta: Meta<typeof Notification> = {
  title: 'Icon/Notification',
  component: Notification,
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
