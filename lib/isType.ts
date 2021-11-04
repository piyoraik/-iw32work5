import { FetchUserType } from '../types/UserType'

export const isUserType = (arg: any): arg is FetchUserType => {
  return arg.rows !== undefined
}
