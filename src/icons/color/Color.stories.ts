import type { Meta, StoryObj } from '@storybook/react'
import Color from './index'

const meta: Meta<typeof Color> = {
 title: 'Icon/Color',
 component: Color,
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
