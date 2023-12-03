const Footer = () => {
    const today = new Date().getFullYear();
    return (
        <footer className="footer py-5">
            <div className="container z-index-1 position-relative">
                <div className="row">
                    <div className="col-lg-4 me-auto mb-lg-0 mb-4 text-lg-start text-center">
                        <h6 className="text-white font-weight-bolder mb-lg-4 mb-3">MSavvy</h6>
        
                        <div className="d-flex flex-column">
                            <div className="d-flex p-2 text-white justify-content-lg-start justify-content-center">
                                <div>
                                    <i className="fas fa-phone text-sm"></i>
                                </div>
                                <div className="ps-3">
                                    <span className="text-sm opacity-8">(+254) 700 013 897</span>
                                </div>
                            </div>
        
                            <div className="d-flex p-2 text-white justify-content-lg-start justify-content-center">
                                <div>
                                    <i className="fas fa-envelope text-sm"></i>
                                </div>
                                <div className="ps-3">
                                    <span className="text-sm opacity-8">momanyiturner@gmail.com</span>
                                </div>
                            </div>
        
                            <div className="d-flex p-2 text-white justify-content-lg-start justify-content-center">
                                <div>
                                    <i className="fas fa-map-marker-alt text-sm"></i>
                                </div>
                                <div className="ps-3">
                                    <span className="text-sm opacity-8">Nairobi, Kenya</span>
                                </div>
                            </div>
                        </div>
        
                    </div>
        
                    <div className="col-lg-6 ms-auto text-lg-end text-center">
                        <p className="mb-5 text-lg text-dark font-weight-bold text-white">
                            The reward for getting on the stage is fame. The price of fame is you can’t get off the stage.
                        </p>
                        <a href="#footer" target="_blank" className="text-white me-xl-4 me-4 opacity-5">
                            <span className="fab fa-linkedin"></span>
                        </a>
                        <a href="#footer" target="_blank" className="text-white opacity-5">
                            <span className="fab fa-github"></span>
                        </a>
                    </div>
                </div>
        
                <div className="row">
                    <p className="text-sm text-white text-center opacity-8 mb-0 mt-4">
                        MSavvy Copyright © {today}
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;