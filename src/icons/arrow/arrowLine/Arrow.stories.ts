import type { Meta,StoryObj } from '@storybook/react'

import Arrow from './index'

const meta: Meta<typeof Arrow> = {
  title: 'Icon/Arrow/Arrow',
  component: Arrow,
  tags: ['autodocs'],
  parameters: {
   
    layout: 'fullscreen'
  },
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    fill: {control :'color'},
    rotation: {control: 'text'}
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const IconColor: Story = {
  args: {
    width: '40px',
    height: '40px',
    fill: 'yellow'
  }
}
