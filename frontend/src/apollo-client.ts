// src/apollo-client.ts
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql', // backend GraphQL URL
  cache: new InMemoryCache(),
});

export default client;
