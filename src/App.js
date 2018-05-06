import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import DessertBuilder from './containers/DessertBuilder/DessertBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <DessertBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
