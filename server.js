import { ApolloServer, gql } from "apollo-server";


const typeDefs = gql`
type User {
    id: ID!
    username: String!
    firstName: String!
    lastName: String
}

type Tweet {
    id:ID!
    text: String!
    author: User!
}
    type Query {
        allTweets: [Tweet]!
        tweet(id: ID!): Tweet
    }
    type Mutation {
        postTweet(text: String!, userId: ID!): Tweet!
        deleteTweet(id:ID!): Boolean!
    }
`;

//SERVER OPEN 서버에게 어떤 데이터 형식을 사용할껀지 말해줘야함
const server = new ApolloServer({typeDefs})

server.listen().then(({url}) => {
    console.log(`Running on ${url}`)
})