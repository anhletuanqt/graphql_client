import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import { ApolloProvider } from '@apollo/client';
import { buildDataProvider } from './data-provider/dataProvider';
import { fbAuthProvider } from './utils/firebase';
import { client } from './utils/apolloClient';

import CustomLogin from './pages/login';

// Define main App
class App extends React.Component {
  constructor() {
    super();
    this.state = { dataProvider: null };
  }
  componentDidMount() {
    const dataProvider = buildDataProvider();
    this.setState({ dataProvider });
  }
  render() {
    const { dataProvider } = this.state;

    if (!dataProvider) {
      return <div>Loading</div>;
    }

    return (
      <ApolloProvider client={client}>
        <Admin
          dataProvider={dataProvider}
          authProvider={fbAuthProvider}
          loginPage={CustomLogin}
        >
          {/* <Resource name="users" list={UserList} show={UserShow} /> */}
          <Resource name="users" list={ListGuesser} edit={EditGuesser} />
        </Admin>
      </ApolloProvider>
    );
  }
}

export default App;
