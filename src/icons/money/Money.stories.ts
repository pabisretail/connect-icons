import type { Meta, StoryObj } from '@storybook/react'
import Money from './index'

const meta: Meta<typeof Money> = {
 title: 'Icon/Money',
 component: Money,
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
