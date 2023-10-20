import type { Meta, StoryObj } from '@storybook/react'
import WarningAlert from './index'

const meta: Meta<typeof WarningAlert> = {
  title: 'Icon/Alert/Warning',
  component: WarningAlert,
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
