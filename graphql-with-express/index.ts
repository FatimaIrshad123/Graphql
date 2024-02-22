import express from 'express'
import {ApolloServer} from '@apollo/server'
import {expressMiddleware} from '@apollo/server/express4'
import bodyParser from 'body-parser'
import cors from 'cors'
import { typeDefs } from './typeDefs'
import { User } from './schema'
const app = express()

const server = new ApolloServer({
    typeDefs,
    resolvers : {
        Query : {
           async data(){  
                   
                let x = await User.find({})
                return x.filter(e => {
                    // console.log(e.name)
                    return e
                })
            }
        }
    }
})
await server.start()
app.use('/graphql',bodyParser(),cors(),expressMiddleware(server))

app.listen(3000,() => console.log('Server runing at port 3000'))