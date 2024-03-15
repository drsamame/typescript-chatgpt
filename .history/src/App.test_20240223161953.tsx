import { test, expect, vi, beforeEach } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

vi.mock('./services/transale.ts', () => ({
  translate: vi.fn()
}))

beforeEach(() => {
  cleanup()
  vi.clearAllMocks()
})

test('My App works as expected', async () => {
  translate.mockReturnValue('Hello world')
  const user = userEvent.setup()
  const app = render(<App />)

  const textareaFrom = app.getByPlaceholderText('Introducir Texto')

  await user.type(textareaFrom, 'Hola mundo')
  const result = await app.findByDisplayValue(/Hello world/i)
  expect(result).toBeTruthy()
})
