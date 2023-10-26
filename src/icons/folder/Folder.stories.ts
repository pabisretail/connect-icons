import type { Meta, StoryObj } from '@storybook/react'
import Folder from './index'

const meta: Meta<typeof Folder> = {
  title: 'Icon/Folder',
  component: Folder,
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
