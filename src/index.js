import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
import { ApolloProvider, graphql } from 'react-apollo';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { APP_QUERY } from './query/query';

const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql' }),
  cache: new InMemoryCache()
});

const AppWithData = graphql(APP_QUERY)(({ data }) => (
  <App data={{ ...data }} />
));

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppWithData />
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
