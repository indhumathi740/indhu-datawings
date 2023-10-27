import 'font-awesome/css/font-awesome.css';
import '../css/ispservice.css';
import { Link } from "react-router-dom";

function Secondbannerbelowcon() {
    return (
        <>
            <div className=' ispservice1 '>
            <div className=' bannerbelcon'>
                    <div className='container'>
                        <div className=' row ban-two-hea'>
                            <div className='col-md-6' >
                                <div className='button'><button className='btns-greens'>what we offer</button></div>
                                <p className='ban-two-bel'>We're Your Trusted Internet Service Professionals.</p>

                            </div>
                            <div className='col-md-6'>
                                <p className='text-muted ban-two-con'>Discover the expertise of our trusted Internet service professionals at Datawings Teleinfra. Count on us for reliable connectivity solutions and exceptional service.</p>
                                <div className='button'><Link to="/aboutus"><button className='btns-green-learn'>learn more</button></Link></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Secondbannerbelowcon;
