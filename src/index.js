import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
import { ApolloProvider } from 'react-apollo';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import reducer from './reducers';

import registerServiceWorker from './helpers/registerServiceWorker';

import App from './components/App/App';

const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql' }),
  cache: new InMemoryCache()
});

const history = createBrowserHistory();
const store = createStore(
  combineReducers({
    app: reducer,
    router: routerReducer
  }),
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history))
  )
);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route path="/" component={App} />
        </div>
      </ConnectedRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

registerServiceWorker();
