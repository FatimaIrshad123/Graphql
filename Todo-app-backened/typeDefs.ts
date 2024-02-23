export const typeDefs = `#graphql
    type todo {
        id : ID,
        title : String,
        description : String
    }
    type Query {
        todos : [todo!]
        todoOne(id: ID!) : todo!
    }
    type Mutation {
        deleteTodo(id : ID!) : [todo!]
        updateTodo(id : ID!, update : updateTodoInput!) : [todo!]
        addTodo(create : createTodo) : todo!
    }
    input updateTodoInput {
        title : String!,
        description : String!
    }
    input createTodo {
        title : String!,
        description : String!
    }
`