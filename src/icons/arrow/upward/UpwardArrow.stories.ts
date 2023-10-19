import type { Meta,StoryObj } from '@storybook/react'

import UpwardArrow from './index'

const meta: Meta<typeof UpwardArrow> = {
  title: 'Icon/Arrow/UpwardArrow',
  component: UpwardArrow,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  },
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    fill: {control :'color'}
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const IconColor: Story = {
  args: {
    width: '30px',
    height: '30px',
    fill: 'red'
  }
}
