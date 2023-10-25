import React, { useState } from 'react';

function Disclaimer() {
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const [showNonPersonalInfo, setShowNonPersonalInfo] = useState(false);
  const [showComputerInfo, setShowComputerInfo] = useState(false);
  const [showSecurityInfo, setShowSecurityInfo] = useState(false);

  return (
    <div className='container policypage'>

      <h2 className='privacy-hed'>DISCLAIMER</h2>
      <p>
      ALL CONTENT ON THIS PORTAL IS TRANSMITTED AND DISTRIBUTED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGMENT. Datawings Teleinfra PRIVATE LIMITED (â€˜Datawingsâ€™) MAKES NO WARRANTY THAT THE PORTAL WILL BE UNINTERRUPTED OR ERROR-FREE, FREE FROM VIRUSES OR SECURITY BREACHES NOR DOES Datawings MAKE ANY WARRANTY AS TO THE RESULTS TO BE OBTAINED FROM THE USE OF THE PORTAL. ANY CONTENT OBTAINED FROM THE PORTAL IS DONE AT YOUR OWN DISCRETION AND RISK AND THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT RESULTS FROM THE USE OF ANY SUCH MATERIAL. THE MAP OF INDIA ON THE WEBSITE IS USED FOR ILLUSTRATIVE PURPOSE ALONE AND IS NOT A POLITICAL MAP OF INDIA. Datawings WILL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR FINANCIAL DAMAGES RESULTING FROM ANY CIRCUMSTANCE INVOLVING YOUR ACCESS TO AND USE OF THE PORTAL OR THE UNAVAILABILITY OF THE SERVICES. This Website and the information, tools and material contained in it are not directed to, or intended for distribution to or use by, any person or entity who is a citizen or resident of or located in any jurisdiction where such distribution, publication, availability or use would be contrary to law or regulation or which would subject Datawings to any registration or licensing requirement within such jurisdiction.This website is subject to periodic update and revision. Materials should only be considered current as of the date of initial publication appearing thereon, without regard to the date on which you may access the information. Datawings maintains the right to delete or modify information on this website without prior notice..      </p>
      <button onClick={() => setShowPersonalInfo(!showPersonalInfo)} className='button-priv'>
      Information
      </button>

      {showPersonalInfo && (
        <div>
          <ul>
            <li>Datawings will try to ensure that all information and recommendations, whether in relation to the products, services, facilities, offerings or otherwise (hereinafter "Information") provided as part of this website are correct at the time of inclusion on the web site. However, Datawings does not guarantee the accuracy of the Information and makes no representations or warranties as to the completeness or accuracy of Information.</li>
            <li>
Datawings shall have an option but no obligation or commitment to update or correct any Information that appears on the Internet or on this web site.</li>
<li>

The persons receiving or viewing the Information are expected to make their own determination as to its suitability for their purposes prior to use or in connection with the making of any decision. No Information at this web site shall constitute an invitation to invest in Datawings. Any use of this website or the Information is at your own risk. Neither Datawings nor their officers, employees or agents shall be liable for any loss, damage or expense arising out of any access to, use of, or reliance upon, this website or the Information, or any website linked to this website.

</li>
<li>This website is controlled and operated from India and Datawings makes no representation that the materials are appropriate or will be available for use in other locations. If you use this web site from anywhere outside India, you are entirely responsible for compliance with all applicable local laws.</li>
          </ul>
        </div>
      )}

      <button onClick={() => setShowNonPersonalInfo(!showNonPersonalInfo)} className='button-priv'>
      Third Party Interaction And Links To Third Party Sites      </button>

      {showNonPersonalInfo && (
        <div>
          <ul>
            <li>The website may provide links to other websites not in our control or in the course of serving advertisements to this website, a third-party advertiser may place or recognize a unique â€œcookieâ€ on your browser. You acknowledge that Datawings does not endorse these linked sites (even if they pop up in a frame) or any links contained in these linked sites. Datawings will not be responsible for the owners or operators of these websites or for any goods or services they supply or for the content of their websites and does not give or enter into any conditions, warranties or other terms or representations in relation to any of these or accept any liability in relation to any of these (including any liability arising out of any claim that the content of any external web site to which this web site includes a link infringes the intellectual property rights of any third party)</li>
            <li>Unless otherwise stated, any correspondence, advertisement, purchase or promotion, including the delivery of and the payment for goods and/or services, and any other term, condition, warranty or representation associated with such correspondence, purchase or promotion or transaction, which you enter into while using the website is solely between you and the applicable third party. You agree that Datawings has no liability, obligation or responsibility for any such correspondence, purchase or promotion between you and any such third party.</li>
         <li>Any offer / promotion made by a Channel Partner or business associate of Datawings and which is clubbed with any Datawings product / service, unless so specified, is not made for or on behalf of Datawings to its customers. Datawings will not be liable for any claims in relation to such offer / promotion.</li>
          </ul>
        </div>
      )}

      

      {/* Continue with other sections like "Security" and additional buttons/content if needed */}
    </div>
  );
}

export default Disclaimer;
