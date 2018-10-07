import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { client } from './apollo'
import App from './pages/App'

const WrappedApp = (
  <ApolloProvider client={client}>
    <App /> 
  </ApolloProvider>
)

ReactDOM.render(WrappedApp, document.getElementById('root'))