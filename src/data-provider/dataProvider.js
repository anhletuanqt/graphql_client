import { gql } from '@apollo/client';
import { fbAuthProvider } from '../utils/firebase';
import { client } from '../utils/apolloClient';

export function buildDataProvider() {
  return {
    getList: async (resource, params) => {
      console.log({ resource, params });

      // { data: {Record[]}, total: {int}, validUntil?: {Date} }
      const { data, error } = await loadUser();
      console.log({ data, error });
      return Promise.resolve({
        data: data.users,
        total: 10,
      });
    },
  };
}

const loadUser = async () => {
  const jwt = await fbAuthProvider.getJWTToken();
  console.log({ jwt });
  const GET_OLD_PUBLIC_TODOS = gql`
    query getMyProfile {
      getMyProfile {
        id
        email
        name
      }
    }
  `;

  return client.query({
    query: GET_OLD_PUBLIC_TODOS,
    context: {
      headers: {
        'access-token': jwt,
      },
    },
  });
};
