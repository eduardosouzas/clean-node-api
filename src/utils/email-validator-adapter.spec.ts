import { EmailValidatorApdater } from './email-validator'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

describe('EmailValidator Adapter', () => {
  test('should return false if validator returns false ', () => {
    const sut = new EmailValidatorApdater()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = sut.isValid('invalid_email@gmail.com')
    expect(isValid).toBe(false)
  })

  test('should return true if validator returns true ', () => {
    const sut = new EmailValidatorApdater()
    const isValid = sut.isValid('valid_email@gmail.com')
    expect(isValid).toBe(true)
  })
})
