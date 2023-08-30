import '../../css/footer.css'
import {Link} from 'react-router-dom';

const Footer =()=>{
    return(
        <div id="contact" class="footer_wrapper mt-3 pt-4 mt-md-0 pb-0">
        <div class="container pb-3">
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <h5>Hotel Location</h5>
                    <div class="contact-info">
                        <ul class="list-unstyled">
                            <li><a href="https://g.page/Softwarica?share" target="_blank" rel="noreferrer"><i class="fa fa-home me-3"></i> Dillibazar, Kathmandu</a></li>
                            <li><a href="tel:01-025632"><i class="fa fa-phone me-3"></i> 01-025632</a></li>
                            <li><a href="mailto:info@example.com" target="_blank" rel="noreferrer"><i class="fa fa-envelope me-3"></i>travelodge@example.com</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5>Quick Links</h5>
                    <ul class="link-widget p-0">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Our Foods</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Rooms</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5>Important Links</h5>
                    <ul class="link-widget p-0">
                        <li><a href="#">Book Rooms</a></li>
                        <li><a href="#">Our Foods</a></li>
                        <li><a href="#">Explore rooms</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5>Stay Connected</h5>
                    <ul class="social-network d-flex align-items-center p-0">
                        <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://www.twitter.com" target="_blank" rel="noreferrer"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container-fluid copyright-section">
            <p>Copyright <Link to="/">© TRAVELODGE.</Link> All Rights Reserved</p>
        </div>
    </div>
    )
}

export default Footer;