import {Link} from 'react-router-dom';
import '../../css/contact.css'

const Contact =()=>{
    return(
        <>
            <div className="contact my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 c-1">
                            <div className="card contact-card px-2 ms-2">
                                <form className="form myForm" action="" method="POST">
                                <div class="form-floating mb-3">
                                    <input type="input" class="form-control" id="floatingName" placeholder="Enter your name" />
                                    <label for="floatingName">Enter Your name</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="input" class="form-control" id="floatingInput" placeholder="someone@example.com" />
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea class="form-control comment-contact" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                                    <label for="floatingTextarea2">Comments</label>
                                </div>
                                <button type="submit" className="btn btn-contact py-2 px-5">Send Message</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 c-1 ps-5">
                            <div className="info">
                                <div className="address">
                                    <Link to=""><i
                                            className="fas fa-map-marker-alt d-flex justify-content-center align-items-center"></i></Link>
                                    <h4>Location:</h4>
                                    <p><a href="https://g.page/Softwarica?share" target="_blank" rel="noreferrer">Dillibazar, Kathmandu</a></p>
                                </div>

                                <div className="email contact-h mt-4">
                                    <Link to=""><i
                                            className="far fa-envelope d-flex justify-content-center align-items-center"></i></Link>
                                    <h4>Email:</h4>
                                    <p><a href="mailto:travelodge@example.com">travelodge@example.com</a></p>
                                </div>
                                <div className="phone contact-h mt-4">
                                    <Link to="">
                                        <i className="fas fa-mobile-alt d-flex justify-content-center align-items-center"></i>
                                    </Link>
                                    <h4>Contact:</h4>
                                    <p><a href="tel:01-025632">01-025632</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <iframe title="This is a unique title"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3939176066942!2d85.32924413608063!3d27.705121397285453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a0a7230f43%3A0x18e4d56d8c3ab0a9!2sSoftwarica%20College!5e0!3m2!1sen!2snp!4v1630930320964!5m2!1sen!2snp"
                    width="100%" height="400" style={{border:0}} allowfullscreen="" loading="lazy" />
            </div>
        </>
    )
}
export default Contact;