import type { Meta, StoryObj } from '@storybook/react'
import Update from './index'

const meta: Meta<typeof Update> = {
  title: 'Icon/Update',
  component: Update,
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
