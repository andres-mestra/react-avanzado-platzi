import React from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = new HttpLink({
  uri: 'https://petgram-server-mestra.vercel.app/graphql',
})

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem('token')
  const authorization = token ? `Bearer ${token}` : ''
  return {
    headers: {
      ...headers,
      authorization,
    },
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
})

export const Apollo = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
