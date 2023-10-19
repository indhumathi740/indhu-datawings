import 'font-awesome/css/font-awesome.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../css/ispservice.css';
import '../css/package.css';

function Packagequestions() {
    return (
        <>
            <div className='container common-pac-ques'>
                <div className='row form-scrolls'>
                    <div className='col-md-4'>
                    <div className='button'><button className='btns-greens-thirds'>FAQ</button></div>
                        <p className=' bannercontentone'>Frequently Ask Questions.</p>
                        <p className=' text-muted ques-head '>An ISP, or Internet Service Provider, connects you to the internet, offering various connection types like broadband, DSL, and fiber optics.</p>
                        
                        </div>
                    <div className='col-md-8'>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Is it possible to change my ISP without losing internet service?
                                    </button>
                                </h2><hr className='lineforquestions'></hr>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body text-muted">
                                        Yes, it's possible to switch ISPs without losing internet service. You can sign up with a new ISP and schedule the transition to minimize downtime.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How can I test my internet speed with my ISP?
                                    </button>
                                </h2><hr className='lineforquestions'></hr>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body text-muted">
                                        You can test your internet speed by using online speed test tools or by contacting your ISP, which may have its own speed test service.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        What should I do if I'm experiencing slow internet with my ISP?
                                    </button>
                                </h2><hr className='lineforquestions'></hr>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body text-muted">
                                        If you're experiencing slow internet, try restarting your modem and router, and contact your ISP to troubleshoot the issue. It could be related to various factors.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                         Are there any data caps on my internet plan?
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body text-muted">
                                         Some ISPs impose data caps on certain plans. Check your plan details or contact your ISP to understand if data caps apply to your service.
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Packagequestions;
