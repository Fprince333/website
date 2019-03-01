import React from 'react';
import Page from 'pages/Page';
import Meta from 'pages/Meta';

const ContactPage = () => {
  return (
    <Page title={Meta.contact.title} description={Meta.contact.description} />
  )
}

export default ContactPage;