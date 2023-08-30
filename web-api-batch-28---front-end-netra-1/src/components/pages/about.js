import '../../css/about.css'
const About = ()=>{
    return (
        <>
            {/* About us section */}
            <div class="site-section">
                <div class="container container-p4">
                    <div class="row">
                        <div class="col-md-6 about-site-1">
                            <h2 class="title">About Us</h2>
                            <h3 class="sub-title">Lorem ipsum dolor sit consectet lorem</h3>
                            <p><span>Aenean consequat ante tellus, quis tempor lectus efficitur id. Nunc id imperdiet ipsum,
                                 vel placerat turpis. Nulla consectetur consectetur facilisis. Aenean eget diam a justo congue 
                                 pulvinar ac quis urna. Donec a lacinia sapien, nec efficitur lacus. Ut quis sodales libero. 
                                 Integer facilisis orci dui, porta tincidunt ante porttitor et. </span></p>
                                    <div class="social-top">
                                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className='social-icon'><i class="fab fa-facebook-f"></i></a>
                                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className='social-icon'><i class="fab fa-instagram"></i></a>
                                        <a href="https://twitter.com/" target="_blank" rel="noreferrer" className='social-icon'><i class="fab fa-twitter"></i></a>
                                    </div>
                        </div>
                        <div class="col-md-6 mb-5 about-site">
                            <img src={require('../../images/carousel/carousel.jpg')} alt="img" class="img-fluid about-img1 text-center" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Staff section */}
            <div class="about-team">
                <div class="container mb-5 team-area">
                    <div class="team-title">
                        <h2 class="mb-5">Our Staffs</h2>
                    </div>
                    <div class="row">

                        <div class="col-lg-3 col-md-6 col-sm-6 ">
                            <div class="single-team">
                                <div class="img-area">
                                    <img src={require('../../images/staff_images/staff.jpg')} class="img-responsive" alt="" />
                                    <div class="social">
                                        <ul class="list-inline">
                                            <li><a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><i class="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="img-text">
                                    <h4>Username</h4>
                                    <p className='text-light h-4'>Receptionist</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-6 ">
                            <div class="single-team">
                                <div class="img-area">
                                    <img src={require('../../images/staff_images/staff2.jpg')} class="img-responsive" alt="" />
                                    <div class="social">
                                        <ul class="list-inline">
                                            <li><a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><i class="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="img-text">
                                    <h4>Username</h4>
                                    <p className='text-light h-4'> Head Chef</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-6 ">
                            <div class="single-team">
                                <div class="img-area">
                                    <img src={require('../../images/staff_images/staff4.jpg')} class="img-responsive" alt="" />
                                    <div class="social">
                                        <ul class="list-inline">
                                            <li><a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><i class="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="img-text">
                                    <h4>Username</h4>
                                    <p className='text-light h-4'>Security</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-6 ">
                            <div class="single-team">
                                <div class="img-area">
                                    <img src={require('../../images/staff_images/staff3.jpg')} class="img-responsive" alt="" />
                                    <div class="social">
                                        <ul class="list-inline">
                                            <li><a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><i class="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="img-text">
                                    <h4>Username</h4>
                                    <p className='text-light h-4'>Maintainance</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* go to contact section */}
            <div class="py-3 mb-1 text-center goto-c">
                <div class="container py-5 py-3">
                    <div class="info-matter">
                        <h3 class="goto-h">For any of your queries, we are available for you</h3>
                        <p class="mt-3 text-dark">Click on “Contact Us” button below to get information to contact us.
                        </p>
                    </div>
                    <div class="view-buttn mt-5">
                        <a href="/contact" class="main-btn">Contact Us</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;