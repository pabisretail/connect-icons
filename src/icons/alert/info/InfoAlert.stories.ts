import type { Meta, StoryObj } from '@storybook/react'
import InfoAlert from './index'

const meta: Meta<typeof InfoAlert> = {
  title: 'Icon/Alert/Info',
  component: InfoAlert,
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
