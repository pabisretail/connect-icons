import type { Meta, StoryObj } from '@storybook/react'
import GroupUser from './index'

const meta: Meta<typeof GroupUser> = {
  title: 'Icon/User/GroupUser',
  component: GroupUser,
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
