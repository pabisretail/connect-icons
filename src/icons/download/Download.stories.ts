import type { Meta, StoryObj } from '@storybook/react'
import Download from './index'

const meta: Meta<typeof Download> = {
  title: 'Icon/Download',
  component: Download,
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
