import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
import { ApolloProvider, graphql } from 'react-apollo';
import { AppQuery } from './queries/AppQuery';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import reducers from './reducers';
import createHistory from 'history/createBrowserHistory';
import { Router } from 'react-router-dom';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import registerServiceWorker from './helpers/registerServiceWorker';

import App from './components/App/App';

const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql' }),
  cache: new InMemoryCache()
});
const AppWithData = graphql(AppQuery)(({ data }) => (
  <App data={data} />
));

const history = createHistory();
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history))
  )
);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router history={history}>
        <AppWithData />
      </Router>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

registerServiceWorker();
