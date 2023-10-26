import type { Meta, StoryObj } from '@storybook/react'
import Location from './index'

const meta: Meta<typeof Location> = {
 title: 'Icon/Location',
 component: Location,
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
