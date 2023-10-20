import type { Meta, StoryObj } from '@storybook/react'
import OutlinedUser from './index'

const meta: Meta<typeof OutlinedUser> = {
  title: 'Icon/User/OutlinedUser',
  component: OutlinedUser,
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
