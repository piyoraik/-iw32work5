import { Router, Request, Response } from 'express'
import { fetchAll, fetchOne } from '../service/userDB'
import { FetchUserType } from '../Types/UserType'

const indexRouter = Router()

indexRouter.get('/', async (req: Request, res: Response) => {
  const users = await fetchAll()
  res.render('index.ejs', {
    users: users.rows,
  })
})

indexRouter.post('/', function (req: Request, res: Response) {
  res.render('index.ejs', {})
})

indexRouter.get('/page1', function (req: Request, res: Response) {
  res.render('page1.ejs')
})

indexRouter.get('/page2/:user', async (req: Request, res: Response) => {
  const fetchUser: FetchUserType = (await fetchOne(
    req.params.user
  )) as FetchUserType
  const user =
    typeof fetchUser.rows !== 'string' ? fetchUser.rows[0].username : 'unknown'
  res.render('page2.ejs', {
    user,
  })
})

export = indexRouter
