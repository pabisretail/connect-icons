import type { Meta, StoryObj } from '@storybook/react'
import Eye from './index'

const meta: Meta<typeof Eye> = {
  title: 'Icon/Eye',
  component: Eye,
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
