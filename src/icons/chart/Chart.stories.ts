import type { Meta, StoryObj } from '@storybook/react'
import Chart from './index'

const meta: Meta<typeof Chart> = {
  title: 'Icon/Chart',
  component: Chart,
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
