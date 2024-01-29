// CommonHelmet.js
import React from 'react';
import { Helmet } from 'react-helmet';

const CommonHelmet = ({ pageTitle = "Default Page Title", pageDescription = "Default meta description", pageKeywords = "default, keywords" }) => {
  const currentUrl = window.location.href;

  const metaContent = {
    des: pageDescription,
    key: pageKeywords,
    ogt: pageTitle,
    og: pageDescription,
    logo: "http://datawings.co.in/images/icons/datawings-logo.webp",
  };

  return (
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={"favicon.ico"} />
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content="index, follow" />
      <title>{metaContent.ogt}</title>
      <meta name="keywords" content={metaContent.key} />
      <meta name="description" content={metaContent.
        des} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={metaContent.ogt} />
      <meta property="og:description" content={metaContent.og} />
      <meta property="og:image" content={metaContent.logo} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Infygain Technologies" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={metaContent.ogt} />
      <meta name="twitter:description" content={metaContent.og} />
      <meta name="twitter:image" content={metaContent.logo} />

      {/* Robot tag */}
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default CommonHelmet;
