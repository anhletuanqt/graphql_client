import { ApolloClient, InMemoryCache } from '@apollo/client';

const createApolloClient = () => {
  return new ApolloClient({
    uri: 'http://34629292b80e.ngrok.io',
    cache: new InMemoryCache(),
  });
};

export const client = createApolloClient();
