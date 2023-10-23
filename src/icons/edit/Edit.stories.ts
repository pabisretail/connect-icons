import type { Meta, StoryObj } from '@storybook/react'
import Edit from './index'

const meta: Meta<typeof Edit> = {
  title: 'Icon/Edit',
  component: Edit,
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
