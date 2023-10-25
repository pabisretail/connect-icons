import type { Meta, StoryObj } from '@storybook/react'
import Label from './index'

const meta: Meta<typeof Label> = {
  title: 'Icon/Label',
  component: Label,
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
