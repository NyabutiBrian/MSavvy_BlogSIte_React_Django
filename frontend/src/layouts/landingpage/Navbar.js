import logo from '../../assets/images/logofavicons/logoDark.png';

const Navbar = () => {
    return (
        <div className ="container position-sticky z-index-sticky top-0">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-transluscent blur border-radius-xl top-0 z-index-fixed shadow position-absolute py-2 start-0 end-0 mx-4">
                        <div className="container-fluid px-0">
                            <a href="#header" className="navbar-brand fw-bolder text-lg">
                                <img src={logo} alt="logo" width="40" height="" />
                            </a>
                            <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon mt-2">
                                    <span className="navbar-toggler-bar bar1"></span>
                                    <span className="navbar-toggler-bar bar2"></span>
                                    <span className="navbar-toggler-bar bar3"></span>
                                </span>
                            </button>

                            <div className="collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100" id="navigation">
                                <ul className="navbar-nav navbar-nav-hover ms-auto align-items-center">
                                    <li className="nav-item">
                                        <a href="#header" className="nav-link ps-2 d-flex cursor-pointer"
                                            aria-expanded="false">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#categories" className="nav-link ps-2 d-flex cursor-pointer"
                                            aria-expanded="false">Topics</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#features" className="nav-link ps-2 d-flex cursor-pointer"
                                            aria-expanded="false">Featured Posts</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#recents" className="nav-link ps-2 d-flex cursor-pointer"
                                            aria-expanded="false">Recent Posts</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#contact" className="nav-link ps-2 d-flex cursor-pointer"
                                            aria-expanded="false">Contact</a>
                                    </li>
                                    <li className="nav-item nav-link">
                                        <a href="https://momanyi-brian-portfolio.vercel.app/" target="Momanyi Brian Portfolio" className="btn btn-sm bg-gradient-info mb-0 me-1 mt-md-0 mt-2"
                                            aria-expanded="false" id="navchange">Porfolio</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar;