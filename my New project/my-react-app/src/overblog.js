import React from 'react';
import './css/ispservice.css';
import Bannerblog from './blogs/blogbanner';

// ss
function OverBlogs() {
    return (
        <>
        <Bannerblog />
        <div className=' container'>
            <div className='overallpique'>
                <div className='innerpique'>
                    <img src="https://kitnew.moxcreative.com/winnet/wp-content/uploads/sites/25/2022/12/satellite-dishes.jpg" className='image-fluid dataimg' />
                    <div className='valuamount'>
                        <p className='text-muted'>   The internet, short for "interconnected networks," is a
                            global system of interconnected computer networks that use the Internet Protocol Suite
                            (TCP/IP) to link billions of devices worldwide. It is a vast network of networks that
                            spans the globe and allows for the exchange of information, communication, and access
                            to a wide range of resources, including websites, email, online services, and much more.</p>
                            <p className='text-muted'>
                            The internet has become an integral part of modern life, enabling people to connect, share information,
                            conduct business, and access a wealth of knowledge and services.</p>
                            <p className='text-muted'>
                            The internet, short for "interconnected networks," is a
                            global system of interconnected computer networks that use the Internet Protocol Suite
                            (TCP/IP) to link billions of devices worldwide. It is a vast network of networks that
                            spans the globe and allows for the exchange of information, communication, and access
                            to a wide range of resources, including websites, email, online services, and much more.</p>
                            <p className='text-muted'>
                            The internet has become an integral part of modern life, enabling people to connect, share information,
                            conduct business, and access a wealth of knowledge and services.
                            A firewall is a network security device or software that is designed to 
                            monitor and control incoming and outgoing network traffic based on predetermined security rules. </p>
                            <h1>The Internet Supporter</h1>
                            <p className='text-muted'>
                            The primary purpose of a firewall is to act as a barrier or protective shield between a trusted
                             internal network and untrusted external networks, such as the internet. Firewalls are crucial 
                             for enhancing network security and protecting sensitive data from unauthorized access 
                             and cyber threats.

                            Firewalls can be implemented in various forms, including hardware devices and software applications.</p>
                            <p className='text-muted'> They work by inspecting data packets as they enter or leave a network and making decisions about
                                whether to allow or block them based on defined rules. These rules are typically configured to
                                restrict access to specific services or ports, block malicious traffic, and prevent 
                                unauthorized intrusions.</p>

                                <p className='text-muted'> Firewalls are essential for safeguarding networks and data from a wide range of threats, 
                            including viruses, malware, hackers, and unauthorized access attempts. They play a critical
                             role in maintaining the confidentiality, integrity, and availability of information on the
                              internet and within corporate or private networks.</p>

                              <p className='text-muted'> In summary, the internet is a vast global network that facilitates 
                            information exchange and connectivity, while firewalls are security measures used 
                            to protect networks and the data within them by controlling the flow of traffic to 
                            and from the internet, ensuring that only authorized and safe traffic is allowed.</p>

                    </div>
                    {/* <div className='buttongroupin'>
                    <div className='buttonque'><img src="/images/facebook.png" className='blogmail image-fluid'></img>
                    <p className='lettering'>Facebook</p></div>
                    <div className='buttonque'><img src="/images/twitter.png" className='blogtwitter image-fluid'></img><p className='lettering'>Twitter</p></div>
                    <div className='buttonque'><img src="/images/mailing.png" className='blogmails image-fluid'></img><p className='lettering'>Email</p></div>
                    <div className='buttonque'><img src="/images/icons8-printer-26.png" className='blogicons image-fluid'></img><p className='lettering'>Print</p></div>
                    </div> */}
                </div>
            </div>
        </div>
        </>
    )
}

export default OverBlogs;