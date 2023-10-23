import type { Meta, StoryObj } from '@storybook/react'
import Support from './index'

const meta: Meta<typeof Support> = {
  title: 'Icon/Support',
  component: Support,
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
