import type { Meta, StoryObj } from '@storybook/react'
import SearchOff from './index'

const meta: Meta<typeof SearchOff> = {
  title: 'Icon/SearchOff',
  component: SearchOff,
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
