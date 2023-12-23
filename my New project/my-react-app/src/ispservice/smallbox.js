import 'font-awesome/css/font-awesome.css';
import '../css/ispservice.css';
import { Link } from "react-router-dom";

function Smallbox() {
    return (
        <>
        <div className='container con-small'>

<div className=' ispsmallbox' data-aos="fade-up" data-aos-duration="2000">
    <div className=' row is-sma-box' data-aos="fade-up" data-aos-duration="2000">
        <div className='col-lg-3' data-aos="fade-up" data-aos-duration="2000">

            <div className='smallimg' ><img src="../images/banner/contact.webp" alt="unlimited internet access" title='unlimited internet access' /></div>

            
        </div>
        <div className='col-lg-6   commonbac' data-aos="fade-up" data-aos-duration="1000">
            <p className='smallconten'>

                Discover a simple, reliable, and affordable solution for unlimited internet access with Datawings Teleinfra . Stay connected without limits.</p>
            <p className='smallpara'>Unlock unlimited internet access with our simple, reliable, and affordable solution</p>
        </div>
        <div className='col-lg-3 commonbac'>
            <div className='btncolor'>
                <Link to="/contact"><button className='btns-green getanobtn'>get started</button></Link>
            </div>
            <div className='row'>

                <div className='col-lg-12 numb-small' data-aos="fade-left" data-aos-duration="1000"><p className='needcon'>
                    NEED MORE HELP?<br></br>8220046331</p></div>
            </div>
        </div>
    </div>
</div>
</div>
</>
    );
}

export default Smallbox;