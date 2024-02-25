import { gql } from "@apollo/client"
export const GET_USERS = gql `
    query  {
        users {
        id,
        name,
        email
  }
}
`
export const USER = gql `
    query user($id: String){
      user(id: $id) {
        id,
        name,
        email,
        password
      }
}`