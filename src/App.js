import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
import { ApolloProvider, graphql } from 'react-apollo';
import { APP_QUERY } from './query/query';
import './styles/app.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql' }),
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app page--index">
          <Header />
          <Main data={this.props.data} />
          <Footer />
        </div>
      </Router>
    );
  }
}

const AppWithData = graphql(APP_QUERY)(({ data }) => (
  <App data={data} />
));

export default () => (
  <ApolloProvider client={client}>
    <AppWithData />
  </ApolloProvider>
);
