import type { Meta, StoryObj } from '@storybook/react'
import Print from './index'

const meta: Meta<typeof Print> = {
  title: 'Icon/Print',
  component: Print,
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
