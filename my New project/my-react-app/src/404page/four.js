import 'font-awesome/css/font-awesome.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../css/about.css';
import { Link } from "react-router-dom";

function Fournotfour() {
    return (
        <div className='fournotfour'>
           <div className='row'> <img src="../images/banner/404.jpg" alt="Image Description" className="ispimage" />    
                       <div className='four-button'><Link className='btn btn-secondary' to='/'>Home</Link ></div>
</div>
            
        
        </div>
    );
}

export default Fournotfour;
