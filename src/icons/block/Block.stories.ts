import type { Meta, StoryObj } from '@storybook/react'
import Block from './index'

const meta: Meta<typeof Block> = {
  title: 'Icon/Block',
  component: Block,
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
