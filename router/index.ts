import { Router, Request, Response } from 'express'
import { isUserType } from '../lib/isType'
import { fetchAll, fetchOne } from '../service/userDB'
import { FetchUserType } from '../types/UserType'

const indexRouter = Router()

indexRouter.get('/', async (req: Request, res: Response) => {
  const users = await fetchAll()
  res.render('index.ejs', {
    users: isUserType(users) ? users.rows : users.message,
  })
})

indexRouter.post('/', function (req: Request, res: Response) {
  res.render('index.ejs', {})
})

indexRouter.get('/page1', function (req: Request, res: Response) {
  res.render('page1.ejs')
})

indexRouter.get('/page2/:user', async (req: Request, res: Response) => {
  const fetchUser = (await fetchOne(req.params.user)) as FetchUserType
  const user =
    fetchUser.rows !== undefined ? fetchUser.rows[0].username : 'unknown'
  res.render('page2.ejs', {
    user,
  })
})

export = indexRouter
