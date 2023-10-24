import type { Meta, StoryObj } from '@storybook/react'
import Logout from './index'

const meta: Meta<typeof Logout> = {
  title: 'Icon/Logout',
  component: Logout,
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
