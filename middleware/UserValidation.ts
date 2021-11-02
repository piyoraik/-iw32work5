import { body, param } from 'express-validator'

export const userPostValidation = () => {
  return [
    param('id').not().isEmpty(),
    param('username').not().isEmpty(),
    param('email').not().isEmpty(),
    param('password').not().isEmpty(),
  ]
}
