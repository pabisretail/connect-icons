import type { Meta, StoryObj } from '@storybook/react'
import Drag from './index'

const meta: Meta<typeof Drag> = {
 title: 'Icon/Drag',
 component: Drag,
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
