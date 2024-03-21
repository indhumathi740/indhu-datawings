// CommonHelmet.js
import React from 'react';
import { Helmet } from 'react-helmet';

const CommonHelmet = ({ pageTitle = "Default Page Title", pageDescription = "Default meta description", pageKeywords = "default, keywords" }) => {
  const currentUrl = window.location.href;
  const breadcrumbSchema = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.datawings.co.in/"
    }, {
      "@type": "ListItem",
      "position": 2,
      "name": "About Us",
      "item": "https://www.datawings.co.in/aboutus"
    }, {
      "@type": "ListItem",
      "position": 3,
      "name": "Packages",
      "item": "https://www.datawings.co.in/Broadband-Internet-service"
    }, {
      "@type": "ListItem",
      "position": 4,
      "name": "Contact Us",
      "item": "https://www.datawings.co.in/Internet-service-Provider"
    }, {
      "@type": "ListItem",
      "position": 5,
      "name": "Blog",
      "item": "https://www.datawings.co.in/blog"
    }, {
      "@type": "ListItem",
      "position": 6,
      "name": "Contact",
      "item": "https://www.datawings.co.in/Internet-service-Provider"
    }]
  };

  const newsArticleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://datawings.co.in/"
    },
    "headline": "Best Isp service in coimbatore",
    "description": "Experience fast internet in Coimbatore with the best ISP. Offering high-speed internet, Wi-Fi, fiber network, and overall internet service provider .",
    "image": "https://datawings.co.in/images/icons/datawings-logo.webp",
    "author": {
      "@type": "Organization",
      "name": ""
    },
    "publisher": {
      "@type": "Organization",
      "name": "",
      "logo": {
        "@type": "ImageObject",
        "url": ""
      }
    },
    "datePublished": ""
  };
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Datawings Teleinfra",
    "image": "https://datawings.co.in/images/icons/datawings-logo.webp",
    "@id": "",
    "url": "https://datawings.co.in",
    "telephone": "8220046331",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3/115, naryiampallipudur karuvalur annur",
      "addressLocality": "coimbatore",
      "postalCode": "641653",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.233803,
      "longitude": 77.099243
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Sunday",
        "Saturday"
      ],
      "opens": "09:30",
      "closes": "19:30"
    }
  };
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    "name": "Datawings Teleinfra",
    "legalName": "Internet Service Provide",
    "email": "info@datawings.co.in",
    "url": "https://datawings.co.in",
    "logo": "https://datawings.co.in/images/icons/datawings-logo.webp",
    "sameAs": [
      "https://www.facebook.com/datawings/",
      "https://twitter.com/Datawingstel",
      "https://www.instagram.com/datawings_teleinfra/",
      "https://www.youtube.com/channel/UCL1lKjlPpx6R2KrozMIBhNQ",
      "https://www.linkedin.com/company/datawingsteleinfra/",
      "https://www.datawings.co.in/"
    ],
    "address": {
      "addressLocality": "coimbatore",
      "postalCode": "641653 ",
      "streetAddress": "naryiampallipudur karuvalur annur coimbatore tamilnadu"
    }
  };
  const websiteSchema = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "Datawings Teleinfra",
    "url": "https://datawings.co.in/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://datawings.co.in/{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  const metaContent = {
    des: pageDescription,
    key: pageKeywords,
    ogt: pageTitle,
    og: pageDescription,
    logo: "https://datawings.co.in/images/icons/datawings-logo.webp",
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
      {/* Breadcrumb schema */}
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

      {/* News Article schema */}
      <script type="application/ld+json">{JSON.stringify(newsArticleSchema)}</script>
      {/* organizationSchema */}
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>

      {/* websiteSchema */}
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>




    </Helmet>
  );
};

export default CommonHelmet;
