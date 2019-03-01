import React from 'react';
import Page from 'pages/Page';
import Meta from 'pages/Meta';

const ProfilePage = () => {
  return (
    <Page title={Meta.profile.title} description={Meta.profile.description} />
  )
}

export default ProfilePage;