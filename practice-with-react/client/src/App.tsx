import './App.css'
import { ApolloClient, ApolloProvider,InMemoryCache } from '@apollo/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Users from './Queries/Users'
import User from './Queries/User'
import AddUsers from './Mutations/AddUsers'

const client = new ApolloClient ({
  uri : 'http://localhost:3000/graphql',
  cache : new InMemoryCache({})
})

function App() {
  
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <Routes>
      <Route path='/adduser' element={<AddUsers />}></Route>
      <Route path='/user' element={<User />}></Route>
      <Route path='/' element={<Users />}></Route>
      </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
