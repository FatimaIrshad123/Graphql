import express from 'express'
// import cors from 'cors'
import bodyParser from 'body-parser' 
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs } from './typeDefs';
import { Todo } from './schema';

const app = express()
app.use(bodyParser.json())

const server = new ApolloServer({
    typeDefs,
    resolvers : {
        Query : {
            async todos (){
                let x = await Todo.find({})
                let y = x.map(e => {return e.title})
                console.log(x.map(e => {return e.title}))
                return x.map(e => {return e.title})
            },
            async todoOne (_,args){
                let x = await Todo.find({})
                return x.find((data) => data.id === args.id)
            }
        },
        Mutation :{
            async deleteTodo(_,args){
                let x = await Todo.find({})
                await Todo.findByIdAndDelete(args.id)
                return x
            },
            async updateTodo(_, args) {
                let x = await Todo.find({});
               let y = await Todo.findByIdAndUpdate(args.id,args.update)
               return y
            },
            async addTodo(_,args){
                let x = await Todo.find({});
                let y = await Todo.create(args.create)
                return y
            }
        }
    }
})
await server.start()
app.use('/graphql',expressMiddleware(server))

app.listen(5000,()=> console.log('Port listening at port 5000'))
