import type { Meta, StoryObj } from '@storybook/react'
import File from './index'

const meta: Meta<typeof File> = {
 title: 'Icon/File',
 component: File,
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
