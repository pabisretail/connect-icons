import type { Meta, StoryObj } from '@storybook/react'
import Menu from './index'

const meta: Meta<typeof Menu> = {
  title: 'Icon/Menu',
  component: Menu,
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
