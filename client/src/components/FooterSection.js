import React from 'react'
import { Link } from 'react-router-dom'

const FooterSection = () => {
    return (<>
        <footer className="bg-light pt-5 pb-4">
            <div className="container text-center text-md-start">
                <div className="row">
                    {/* <!-- First Column --> */}
                    <div className="col-md-3 col-lg-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold">Meesho</h5>
                        <p>High-quality products at the best prices delivered right to your doorstep.</p>
                    </div>

                    {/* <!-- Second Column --> */}
                    <div className="col-md-2 col-lg-2 mx-auto mt-3">
                        <ul className="list-unstyled">
                            <li><Link to="#" className="text-dark text-decoration-none">Become a supplier</Link></li>
                            <li><Link to="#" className="text-dark text-decoration-none">Hall of Fame</Link></li>
                            <li><Link to="#" className="text-dark text-decoration-none">Sitemap</Link></li>
                            <li><Link to="#" className="text-dark text-decoration-none">Blogs</Link></li>
                        </ul>
                    </div>

                    {/* <!-- Third Column --> */}
                    <div className="col-md-3 col-lg-2 mx-auto mt-3">
                        <ul className="list-unstyled">
                            <li><Link to="#" className="text-dark text-decoration-none">Legal and Policies</Link></li>
                            <li><Link to="#" className="text-dark text-decoration-none">Meesho Tech Blog</Link></li>
                            <li><Link to="#" className="text-dark text-decoration-none">Notices and Returns</Link></li>
                        </ul>
                    </div>
                    {/* <!-- Social Media Links --> */}
                    <div className="col-md-3 col-lg-2 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 ">Reach Out Us</h6>
                        <ul className="list-unstyled list-inline">
                            <li className="list-inline-item">
                                <Link to="#" className="text-dark"><i className="fab fa-facebook-f"></i></Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#" className="text-dark"><i className="fab fa-twitter"></i></Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#" className="text-dark"><i className="fab fa-instagram"></i></Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#" className="text-dark"><i className="fab fa-linkedin"></i></Link>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Fourth Column --> */}
                    <div className="col-md-3 col-lg-3 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Contact Us</h6>
                        <p><i className="fas fa-home me-3"></i> Bangalore, India</p>
                        <p><i className="fas fa-envelope me-3"></i> info@meesho.com</p>
                        <p><i className="fas fa-phone me-3"></i> +91 98765 43210</p>
                    </div>
                </div>
            </div>
        </footer>

    </>)
}

export default FooterSection
