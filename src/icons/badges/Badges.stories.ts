import type { Meta, StoryObj } from '@storybook/react'
import Badges from './index'

const meta: Meta<typeof Badges> = {
 title: 'Icon/Badges',
 component: Badges,
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
