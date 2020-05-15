import { EmailValidator } from '../presentation/protocols/email-validator'

export class EmailValidatorApdater implements EmailValidator {
  isValid (email: string): boolean {
    return false
  }
}
