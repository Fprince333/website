import React from 'react';
import Page from 'pages/Page';
import Meta from 'pages/Meta';

const AbilitiesPage = () => {
  return (
    <Page title={Meta.abilities.title} description={Meta.abilities.description} />
  )
}

export default AbilitiesPage;