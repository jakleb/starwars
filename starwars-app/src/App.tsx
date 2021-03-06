import React from 'react';
import './App.scss';
import { ApolloClient, HttpLink, ApolloProvider, from, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { StarWarsContainer } from './Components/StarWarsContainer';
import { BrowserRouter as Router } from "react-router-dom";

const errorLink = onError(({graphQLErrors, networkError}) => {
  if(graphQLErrors){
    graphQLErrors.map(({message, locations, path}) => {
      alert(`GraphQL error ${message}`);
    })
  }
})

const GQL_Uri = 'http://localhost:55746';

const link = from([errorLink, new HttpLink({ uri: GQL_Uri})]);

const client = new ApolloClient({
  link: link,
  cache:  new InMemoryCache()
 }) 

function App() {
  return (
    <ApolloProvider client={client} >
    <div className="App">
      <Router>
        <StarWarsContainer />
      </Router>
    </div>
    </ApolloProvider>
  );
}

export default App;
