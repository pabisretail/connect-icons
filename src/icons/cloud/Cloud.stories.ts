import type { Meta, StoryObj } from '@storybook/react'
import Cloud from './index'

const meta: Meta<typeof Cloud> = {
  title: 'Icon/Cloud',
  component: Cloud,
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
