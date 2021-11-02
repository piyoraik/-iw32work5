import { Router, Request, Response } from 'express'
import { validationResult } from 'express-validator'
import { userPostValidation } from '../middleware/UserValidation'
import {
  deleteUser,
  fetchAll,
  fetchOne,
  postUser,
  updateUser,
} from '../service/userDB'
import { UserType } from '../Types/UserType'

const userRouter = Router()

/* /users */
userRouter.get('/', async (req: Request, res: Response) => {
  const dbQuery = await fetchAll()
  res.send(dbQuery)
})

userRouter.post(
  '/',
  userPostValidation(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req.body)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { id, username, email, password } = req.body.params
    const dbQuery = await postUser({
      id,
      username,
      email,
      password,
    } as UserType)
    res.send(dbQuery)
  }
)

/* /users/:id */
userRouter.get('/:id', async (req: Request, res: Response) => {
  const params = req.params.id
  const dbQuery = await fetchOne(params)
  res.send(dbQuery)
})

userRouter.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const { username, email, password } = req.body.params
  const dbQuery = await updateUser({
    id,
    username,
    email,
    password,
  } as UserType)
  res.send(dbQuery)
})

userRouter.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const dbQuery = await deleteUser(id)
  res.send(dbQuery)
})

export = userRouter
