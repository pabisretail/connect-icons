import type { Meta, StoryObj } from '@storybook/react'
import Camera from './index'

const meta: Meta<typeof Camera> = {
  title: 'Icon/Camera',
  component: Camera,
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
