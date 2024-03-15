import { test, expect, vi, beforeEach, describe } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { translate } from './services/transale'
import App from './App'

vi.mock('./services/transale', () => ({
  translate: vi.fn()
}))

describe('Router', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  test('My App works as expected', async () => {
    console.log(translate)
    const user = userEvent.setup()
    const app = render(<App />)

    const textareaFrom = app.getByPlaceholderText('Introducir Texto')

    await user.type(textareaFrom, 'Hola mundo')
    const result = await app.findByDisplayValue(/Hello world/i)
    expect(result).toBeTruthy()
  })
})
