import type { Meta, StoryObj } from '@storybook/react'
import Search from './index'

const meta: Meta<typeof Search> = {
  title: 'Icon/Search',
  component: Search,
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
