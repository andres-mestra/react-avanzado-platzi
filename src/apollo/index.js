import React from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  from,
  HttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

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

const errorLink = onError(({ networkError }) => {
  if (networkError && networkError.result.code === 'invalid_token') {
    sessionStorage.removeItem('token')
    window.location = '/user'
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink, authLink.concat(httpLink)]),
})

export const Apollo = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
