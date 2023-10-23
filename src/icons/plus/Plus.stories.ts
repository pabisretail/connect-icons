import type { Meta, StoryObj } from '@storybook/react'
import Plus from './index'

const meta: Meta<typeof Plus> = {
  title: 'Icon/Plus',
  component: Plus,
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
