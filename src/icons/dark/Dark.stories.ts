import type { Meta, StoryObj } from '@storybook/react'
import Dark from './index'

const meta: Meta<typeof Dark> = {
  title: 'Icon/Dark',
  component: Dark,
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
