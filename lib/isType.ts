import { FetchUserType } from '../Types/UserType'

export const isUserType = (arg: any): arg is FetchUserType => {
  return arg.rows !== undefined
}
