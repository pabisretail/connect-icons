import type { Meta, StoryObj } from '@storybook/react'
import Graph from './index'

const meta: Meta<typeof Graph> = {
  title: 'Icon/Graph',
  component: Graph,
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
