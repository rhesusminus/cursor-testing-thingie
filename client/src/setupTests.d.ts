/// <reference types="vitest" />
import '@testing-library/jest-dom'

// Extend the Vitest's expect interface with Jest DOM matchers
declare module 'vitest' {
  interface Assertion<T = any> extends jest.Matchers<void, T> {}
  interface AsymmetricMatchersContaining extends jest.AsymmetricMatchers {}
}
