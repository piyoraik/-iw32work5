export interface UserType {
  id: string
  username: string
  email: string
  password: string
}

export interface FetchUserType {
  response: number
  rows: [UserType]
}
