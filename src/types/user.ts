export type Address = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: {
    lat: number
    lng: number
  }
}

export type Company = {
  name: string
  catchPhrase: string
  bs: string
}

export type User = {
  id: string
  name: string
  username: string
  email: string
  phone: string
  website: string

  address: Address
  company: Company
}

export type UserHook = {
  users: User[]
  isLoading: boolean
  isError: boolean
}
