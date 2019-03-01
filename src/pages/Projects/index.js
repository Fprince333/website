import React from 'react';
import Page from 'pages/Page';
import Meta from 'pages/Meta';

const ProjectsPage = () => {
  return (
    <Page title={Meta.projects.title} description={Meta.projects.description} />
  )
}

export default ProjectsPage;