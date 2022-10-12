import { StoryFn } from '@storybook/react'
import GlobalStyles from '../styles/global'

export const decorators = [
  (Story: StoryFn) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]
