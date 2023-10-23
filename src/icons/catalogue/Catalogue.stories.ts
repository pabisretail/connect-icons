import type { Meta, StoryObj } from '@storybook/react'
import Catalogue from './index'

const meta: Meta<typeof Catalogue> = {
  title: 'Icon/Catalogue',
  component: Catalogue,
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
