import type { Meta, StoryObj } from '@storybook/react'
import Mail from './index'

const meta: Meta<typeof Mail> = {
  title: 'Icon/Mail',
  component: Mail,
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
