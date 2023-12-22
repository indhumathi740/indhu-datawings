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
            
        </Helmet>
    );
};

export default CommonHelmet;
