import type { Meta, StoryObj } from '@storybook/react'
import Language from './index'

const meta: Meta<typeof Language> = {
  title: 'Icon/Language',
  component: Language,
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
