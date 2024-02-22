export const typeDefs = `#graphql
    type Data {
        id : ID!,
        name : String!,
        address : String!,
    }
    type Query {
        data : [Data!]
    }

`