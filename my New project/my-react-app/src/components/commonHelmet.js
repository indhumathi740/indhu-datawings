// CommonHelmet.js
import React from 'react';
import { Helmet } from 'react-helmet';
// Get the current URL using window.location.href
const currentUrl = window.location.href;
const CommonHelmet = () => {
    return (
        <Helmet>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href={"favicon.ico"} />
            <link rel="canonical" href={currentUrl} />
            <meta name="robots" content="index, follow" />
            <title>Top Coimbatore ISPs: Seamless Internet for You</title>
            <meta name="keywords" content="Internet Service Provider,High-Speed Internet,Network Solutions,Internet Plans,Internet Access"/>
            <meta name="description" content="Discover top ISPs in Coimbatore for seamless internet. Enjoy fast downloads and reliable service. Choose the best ISP for a connected online experience." />
            <script type="application/ld+json">
                {`
                "@context": "https://schema.org/", 
                "@type": "BreadcrumbList", 
                "itemListElement": [{
                    "@type": "ListItem", 
                    "position": 1, 
                    "name": "Home",
                    "item": "https://www.datawings.co.in/"  
                },{
                    "@type": "ListItem", 
                    "position": 2, 
                    "name": "About",
                    "item": "https://www.datawings.co.in/aboutus"  
                },{
                    "@type": "ListItem", 
                    "position": 3, 
                    "name": "Package",
                    "item": "https://www.datawings.co.in/packages"  
                },{
                    "@type": "ListItem", 
                    "position": 4, 
                    "name": "Blogs",
                    "item": "https://www.datawings.co.in/blog"  
                },{
                    "@type": "ListItem", 
                    "position": 5, 
                    "name": "Contact",
                    "item": "https://www.datawings.co.in/contact"  
                }]
                `}
                </script>

                <script type="application/ld+json">
                {`
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "DataWings",
                "image": "https://www.datawings.co.in/images/icons/data.png",
                "@id": "",
                "url": "https://www.datawings.co.in/",
                "telephone": "8220046331",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "3/115, Naryiampallipudur Karuvalur, Annur",
                    "addressLocality": "Coimbatore",
                    "postalCode": "641653",
                    "addressCountry": "IN"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 11.2321032,
                    "longitude": 77.10671599999999
                },
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                    ],
                    "opens": "00:00",
                    "closes": "23:59"
                },
                "sameAs": [
                    "https://www.facebook.com/datawings/",
                    "https://twitter.com/Datawingstel",
                    "https://www.instagram.com/datawings_teleinfra/",
                    "https://www.youtube.com/channel/UCL1lKjlPpx6R2KrozMIBhNQ",
                    "https://www.linkedin.com/company/datawingsteleinfra/"
                ] 
                `}
                </script>

                <script type="application/ld+json">
                    {`
                    "@context": "https://schema.org",
                    "@type": "Corporation",
                    "name": "DataWings",
                    "alternateName": "ISP Service Provider",
                    "url": "https://www.datawings.co.in/",
                    "logo": "https://www.datawings.co.in/images/icons/data.png",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "8220046331",
                        "contactType": "customer service",
                        "areaServed": "IN",
                        "availableLanguage": "en"
                    },
                    "sameAs": [
                        "https://www.facebook.com/datawings/",
                        "https://twitter.com/Datawingstel",
                        "https://www.instagram.com/datawings_teleinfra/",
                        "https://www.youtube.com/channel/UCL1lKjlPpx6R2KrozMIBhNQ",
                        "https://www.linkedin.com/company/datawingsteleinfra/"
                    ]
                    `}
                </script>

        </Helmet>
    );
};

export default CommonHelmet;
