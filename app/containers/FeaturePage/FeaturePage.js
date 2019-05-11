/*
 * ComponentsPage
 *
 * List all the components
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import Pagination from '../../components/Pagination/Pagination';
import Form from '../../components/Form/Form';
import Card from '../../components/Card/Card';
import Callout from '../../components/Callout/Callout';

import './style.scss';

export default class FeaturePage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="feature-page">
        <Helmet>
          <title>Components</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <h1>Pagination</h1>
        <Pagination />

        <h1>Form</h1>
        <Form />

        <h1>Card</h1>
        <Card />

        <h1>Callout</h1>
        <Callout />

      </div>
    );
  }
}
