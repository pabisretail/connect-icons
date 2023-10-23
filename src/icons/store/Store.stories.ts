import type { Meta, StoryObj } from '@storybook/react'
import Store from './index'

const meta: Meta<typeof Store> = {
  title: 'Icon/Store',
  component: Store,
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
