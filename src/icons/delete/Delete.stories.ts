import type { Meta, StoryObj } from '@storybook/react'
import Delete from './index'

const meta: Meta<typeof Delete> = {
  title: 'Icon/Delete',
  component: Delete,
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
