import React from 'react';
import Page from 'pages/Page';
import Meta from 'pages/Meta';

const ExperiencePage = () => {
  return (
    <Page title={Meta.experience.title} description={Meta.experience.description} />
  )
}

export default ExperiencePage;