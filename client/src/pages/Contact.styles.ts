import { css } from '../../styled-system/css'
import { container, flex } from '../../styled-system/patterns'

export const contactContainer = container({ maxW: '600px' })

export const heading = css({ fontSize: '2xl', fontWeight: 'bold', mb: '6' })

export const form = flex({ direction: 'column', gap: '4' })

export const formGroup = flex({ direction: 'column', gap: '2' })

export const label = css({ fontWeight: 'medium' })

export const input = css({
  p: '2',
  border: '1px solid',
  borderColor: 'gray.300',
  rounded: 'md',
  '&:focus': {
    outline: 'none',
    borderColor: 'blue.500',
    ring: '1px',
    ringColor: 'blue.500',
  },
})

export const textarea = css({
  p: '2',
  border: '1px solid',
  borderColor: 'gray.300',
  rounded: 'md',
  resize: 'vertical',
  '&:focus': {
    outline: 'none',
    borderColor: 'blue.500',
    ring: '1px',
    ringColor: 'blue.500',
  },
})

export const submitButton = css({
  mt: '4',
  p: '2',
  bg: 'blue.600',
  color: 'white',
  rounded: 'md',
  fontWeight: 'medium',
  cursor: 'pointer',
  '&:hover': {
    bg: 'blue.700',
  },
  '&:focus': {
    outline: 'none',
    ring: '2px',
    ringColor: 'blue.500',
  },
})
