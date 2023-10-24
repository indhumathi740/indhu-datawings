import React, { useState } from 'react';

function Supports() {
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const [showNonPersonalInfo, setShowNonPersonalInfo] = useState(false);
  const [showComputerInfo, setShowComputerInfo] = useState(false);
  const [showSecurityInfo, setShowSecurityInfo] = useState(false);

  return (
    <div className='container policypage'>
    
    <h2 className='privacy-hed'>DATAWINGS</h2>

      <h2 className='privacy-hed-side'>CANCELLATION POLICY</h2>
      <p>
      DataWings Teleinfra Pvt Ltd believes in helping its customers as far as possible and has therefore a liberal cancellation policy. Under this policy:

</p>
    

        <div>
          <ul>
            <li>Cancellations will be considered only if the request is made within 72 hours of placing an order and making a payment on software and hardware products.</li>
            <li>No cancellations are entertained for those products that include services such as customization or setup charges.</li>
            <li>In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 24 hours of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.</li>
            <li>In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.

</li>
          </ul>
          <h2 className='privacy-hed-side'>REFUND POLICY
</h2>
<p className=''>
When you buy our products/services, your purchase is covered by our 3-day money-back guarantee. If you are, for any reason, not entirely happy with your purchase, we will cheerfully issue a full refund. We provide the internet service that we use ourselves every day and have thousands of satisfied customers worldwide, and our support is second to none. That is why we can afford to back our products with this special guarantee. To request a refund, simply contact us with your purchase details within three days of your purchase. Please include your invoice number (sent to you via email after ordering) and optionally tell us why you are requesting a refund we take customer feedback very seriously and use it to constantly improve our products and quality of service. Refunds are not being provided for services delivered in full such as installation service and customization. Refunds are being processed within 14 days period.

</p>

        </div>
    
     


      {/* Continue with other sections like "Security" and additional buttons/content if needed */}
    </div>
  );
}

export default Supports;
