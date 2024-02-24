export const typeDefs = `#graphql
    type User {
        id : String
        name : String,
        email : String,
        password : String
    }
    type Query {
        users : [User!]
        user(id : String) : User!
    }
    
    type Mutation {
        createuser(create : createuserinput) : User
        updateuser(update : updateuserinput, id: String!) : User
        deleteuser(id : String!) : [User]
    }
    input createuserinput {
        name : String,
        email : String,
        password : String,
    }
    input updateuserinput{
        name : String,
        email : String,
        password : String
    }
`