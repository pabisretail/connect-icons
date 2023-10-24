import type { Meta, StoryObj } from '@storybook/react'
import Settings from './index'

const meta: Meta<typeof Settings> = {
  title: 'Icon/Settings',
  component: Settings,
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
