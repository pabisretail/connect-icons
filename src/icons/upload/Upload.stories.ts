import type { Meta, StoryObj } from '@storybook/react'
import Upload from './index'

const meta: Meta<typeof Upload> = {
  title: 'Icon/Upload',
  component: Upload,
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
