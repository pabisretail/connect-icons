import type { Meta,StoryObj } from '@storybook/react'

import DropArrow from './index'

const meta: Meta<typeof DropArrow> = {
  title: 'Icon/Arrow/DropArrow',
  component: DropArrow,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
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
    width: '20px',
    height: '20px',
    fill: 'red'
  }
}
