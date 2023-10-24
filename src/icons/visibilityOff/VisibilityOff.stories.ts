import type { Meta, StoryObj } from '@storybook/react'
import VisibilityOff from './index'

const meta: Meta<typeof VisibilityOff> = {
  title: 'Icon/VisibilityOff',
  component: VisibilityOff,
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
