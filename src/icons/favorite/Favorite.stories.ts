import type { Meta, StoryObj } from '@storybook/react'
import Favorite from './index'

const meta: Meta<typeof Favorite> = {
  title: 'Icon/Favorite',
  component: Favorite,
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
