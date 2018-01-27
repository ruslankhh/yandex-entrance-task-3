import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
import { ApolloProvider, graphql } from 'react-apollo';
import { AppQuery } from './queries/AppQuery';
import registerServiceWorker from './helpers/registerServiceWorker';

import App from './components/App/App';

const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql' }),
  cache: new InMemoryCache()
});

const AppWithData = graphql(AppQuery)(({ data }) => (
  <App data={data} />
));

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppWithData />
  </ApolloProvider>,
  document.getElementById('root')
);

registerServiceWorker();
