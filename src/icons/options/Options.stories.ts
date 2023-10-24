import type { Meta, StoryObj } from '@storybook/react'
import Options from './index'

const meta: Meta<typeof Options> = {
  title: 'Icon/Options',
  component: Options,
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
