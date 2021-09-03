import React from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client'

const link = new HttpLink({
  uri: 'https://petgram-server-mestra.vercel.app/graphql',
  fetch,
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})

export const Apollo = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
