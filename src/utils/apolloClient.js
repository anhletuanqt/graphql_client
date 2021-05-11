import { ApolloClient, InMemoryCache } from '@apollo/client';

const createApolloClient = () => {
  return new ApolloClient({
    uri: 'https://food-to-have.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
  });
};

export const client = createApolloClient();
