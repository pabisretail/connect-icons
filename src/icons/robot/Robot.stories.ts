import type { Meta, StoryObj } from '@storybook/react'
import Robot from './index'

const meta: Meta<typeof Robot> = {
  title: 'Icon/Robot',
  component: Robot,
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
