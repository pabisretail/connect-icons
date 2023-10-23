import type { Meta, StoryObj } from '@storybook/react'
import Erase from './index'

const meta: Meta<typeof Erase> = {
  title: 'Icon/Erase',
  component: Erase,
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
