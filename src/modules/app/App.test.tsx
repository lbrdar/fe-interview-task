import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './apolloClient';

describe('App', () => {
  it('should render successfully', () => {
    expect(() => render(
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    )).not.toThrow();
  });
});
