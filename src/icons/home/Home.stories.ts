import type { Meta, StoryObj } from '@storybook/react'
import Home from './index'

const meta: Meta<typeof Home> = {
  title: 'Icon/Home',
  component: Home,
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
