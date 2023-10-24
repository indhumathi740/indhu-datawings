import React, { useState } from 'react';

function PrivacyStatement() {
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const [showNonPersonalInfo, setShowNonPersonalInfo] = useState(false);
  const [showComputerInfo, setShowComputerInfo] = useState(false);
  const [showSecurityInfo, setShowSecurityInfo] = useState(false);

  return (
    <div className='container policypage'>
      <h2 className='privacy-hed'>PRIVACY POLICY</h2>

      <h2 className='privacy-hed-side'>PRIVACY STATEMENT</h2>
      <p>
        In the course of using this website or availing the products and services vide the online application forms and questionnaires, Datawings Teleinfra Private Limited (Datawings) may become privy to the personal information of its customers, including information that is of a confidential nature. We at Datawings respect and give high priority to the privacy of all customers and are committed to maintaining the privacy and security of the personal information which is provided by its customers. Datawings has taken all necessary and reasonable measures to protect the confidentiality of the customer information and its transmission through the web. While no data transmission over the Internet is 100% secure from intrusion, we have used and will continue to use commercially reasonable efforts to ensure the protection of your information. Please read the following to learn more about our privacy policy.
      </p>
      <button onClick={() => setShowPersonalInfo(!showPersonalInfo)} className='button-priv'>
        Personal Information
      </button>

      {showPersonalInfo && (
        <div>
          <ul>
            <li>Our site's registration form requires you to give us contact information like your name and email address. We collect personal information from our customers on a voluntary basis. Personal information may include name, title, company, address, phone number, email address, and other relevant data.</li>
            <li>We collect and use personal information for business purposes in order
To seek your feedback or to contact you in relation to those services offered by us. To process orders or applications submitted by you. To administer or otherwise carry out our obligations in relation to any agreement you have with us. To anticipate and resolve problems with any goods or services supplied to you. To create products or services that may meet your needs. To process and respond to requests, improve our operations, and communicate with visitors about our products, services and businesses.</li>
<li>Datawings will limit the collection and use of customer information only on a need-to-know basis to deliver better service to the customers. Datawings may use and share the information provided by the Customers with its affiliates and third parties for providing services and any service-related activities such as collecting subscription fees for such services, and notifying or contacting the customers regarding any problem with, or the expiration of, such services. In this regard, it may be necessary to disclose the customer information to one or more agents and contractors of Datawings and their sub-contractors, but such agents, contractors, and sub-contractors will be required to agree to use the information obtained from Datawings only for these purposes.</li>
<li>Datawings will not use, sell or share, with any one, any information collected at this page for direct marketing purposes.</li>
<li>Datawings may disclose personally identifiable information about you to third parties when It has your consent to share the information. It needs to share your information to provide the product or service you have requested and given your consent.It has to cooperate with the investigations of purported unlawful activities or in connection with security related or law enforcement investigations or in the course of cooperating with authorities or complying with legal requirements.It believes in good faith that such action is necessary to protect and defend the rights and related property of Datawings and that of its customers.It uses reasonable precautions to keep the information disclosed to it secure.It finds necessary to act to protect the interests of Datawings, its affiliates, or its members, constituents or of other persons.</li>
<li>By entering this website you are consenting to the terms of our information privacy policy and to our continued use of previously collected information. By submitting your personal information to us, you will be treated as having given your permission for the processing of your personal data as set out in this policy.</li>
          </ul>
        </div>
      )}

      <button onClick={() => setShowNonPersonalInfo(!showNonPersonalInfo)} className='button-priv'>
        Non-Personal Information
      </button>

      {showNonPersonalInfo && (
        <div>
          <ul>
            <li>At this website, information sent by your web browser, may be automatically collected. This information typically includes your domain name (the site after the @ in your e-mail address). It may also contain your user name (the name before the @ in your e-mail address). Other examples of information collected by our server include the Internet protocol (IP) address used to connect the visitor's computer to the Internet, operating system and platform, the average time spent on our website, pages viewed, information searched for, access times, websites visited before and a visitor visits our website, and other relevant statistics. The amount of information sent depends on the settings you have on your web browser; please refer to your browser if you want to learn what information it sends. Some of this information is also required in terms of the statutory obligations of the Company.</li>
            <li>All such information will be used only to assist us in providing an effective service on this website. We may from time to time supply the owners or operators of third party websites from which it is possible to link to our website with information relating to the number of users linking to our website from such third party website. You cannot be identified from this information.</li>
          </ul>
        </div>
      )}

      <button onClick={() => setShowComputerInfo(!showComputerInfo)} className='button-priv'>
        Information Placed On Your Computer
      </button>

      {showComputerInfo && (
        <div>
          <ul>
            <li>We may store some information such as cookies on your computer when you look at our website. Cookies are pieces of information that a website transfers to the hard drive of a visitor's computer for record-keeping purposes. This information facilitates your use of our website and ensures that you do not need to re-enter your details every time you visit it. You can erase or choose to block this information from your computer if you want to; please refer to your browser settings to do so. Erasing or blocking such information may limit the range of features available to the visitor on our website. We use also use such information to provide visitors a Personalized experience on our website. We may use such information to allow visitors to use the website without logging on upon returning, to auto-populate email forms, to make improvements and to better tailor our website to our visitors' needs. We also use this information to verify that visitors meet the criteria required to process their requests.</li>
          </ul>
        </div>
      )}
 <button onClick={() => setShowSecurityInfo(!showComputerInfo)} className='button-priv'>
    Security
      </button>

      {showSecurityInfo && (
        <div>
          <ul>
<li>We aim to keep our information about you as accurate as possible. If you would like to review or change the details you have supplied us with, please contact us as set out below. If you wish to change or delete any of the personal information provided at the time of subscription, e-mail at hello@datawingstel.in</li>          </ul>
        </div>
      )}

      {/* Continue with other sections like "Security" and additional buttons/content if needed */}
    </div>
  );
}

export default PrivacyStatement;
