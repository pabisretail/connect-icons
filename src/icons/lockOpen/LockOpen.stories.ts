import type { Meta, StoryObj } from '@storybook/react'
import LockOpen from './index'

const meta: Meta<typeof LockOpen> = {
  title: 'Icon/LockOpen',
  component: LockOpen,
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
