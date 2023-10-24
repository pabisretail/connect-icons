import type { Meta, StoryObj } from '@storybook/react'
import Close from './index'

const meta: Meta<typeof Close> = {
  title: 'Icon/Close',
  component: Close,
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
