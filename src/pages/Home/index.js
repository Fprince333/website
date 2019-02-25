import React from 'react';
import Page from 'pages/Page';
import Meta from 'pages/Meta';

const HomePage = () => {
  return (
    <Page title={Meta.home.title} description={Meta.home.description} />
  )
}

export default HomePage;