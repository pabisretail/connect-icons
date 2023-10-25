import type { Meta, StoryObj } from '@storybook/react'
import CheckCircle from './index'

const meta: Meta<typeof CheckCircle> = {
 title: 'Icon/CheckCircle',
 component: CheckCircle,
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
