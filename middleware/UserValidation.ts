import { body } from 'express-validator'

export const userPostValidation = () => {
  return [
    body('id').not().isEmpty(),
    body('username').not().isEmpty(),
    body('email').not().isEmpty(),
    body('password').not().isEmpty(),
  ]
}

export const userUpdateDeleteValidation = () => {
  return [body('id').not().isEmpty()]
}
