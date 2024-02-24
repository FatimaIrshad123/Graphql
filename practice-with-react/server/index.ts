import express from "express";
import jwt from 'jsonwebtoken'
import cors from 'cors'
import bodyParser from 'body-parser' 
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs } from "./typeDefs.js";
import { Userdb } from "./Schema.js";
const app = express()
const secret = 'secret'
app.use(express.json())
app.use(cors())
const server = new ApolloServer ({
    typeDefs,
    resolvers : {
        Query : {
            async users(){
                let data = await Userdb.find({})
                return data
            },
            async user(_,args){
                let userbyid = await Userdb.findById(args.id)
                return userbyid
            }
        },
        Mutation : {
            async createuser(_,args){
                // let data = await Userdb.find({})
                let newUser = await Userdb.create(args.create)
                        return newUser
                // let x = data.find(e => e.email === args.create.email)
                // if (typeof(x) === 'undefined'){
                //     const token = jwt.sign(args.create,secret)
                //     const verify = jwt.verify(token,secret)
                //     if (verify){}else {return 'Invalid User'} }else{return 'User Already exists'}
            },
            async updateuser(_,args){
                let x = await Userdb.find({});
               let y = await Userdb.findByIdAndUpdate(args.id,args.update)
               return y
            },
            async deleteuser(_,args){
                await Userdb.findByIdAndDelete(args.id)
                return await Userdb.find({})
            }
        }
    }
})

await server.start()
app.use('/graphql',expressMiddleware(server))
app.listen(3000,() => console.log('App running on port 3000'))