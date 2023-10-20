import type { Meta, StoryObj } from '@storybook/react'
import FillUSer from './index'

const meta: Meta<typeof FillUSer> = {
  title: 'Icon/User/FillUSer',
  component: FillUSer,
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
