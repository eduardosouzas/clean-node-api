import { EmailValidatorApdater } from './email-validator'

describe('EmailValidator Adapter', () => {
  test('should return false if validator returns false ', () => {
    const sut = new EmailValidatorApdater()
    const isValid = sut.isValid('invalid_email@gmail.com')
    expect(isValid).toBe(false)
  })
})
