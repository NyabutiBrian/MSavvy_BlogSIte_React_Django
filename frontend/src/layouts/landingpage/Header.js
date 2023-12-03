import bgImage from '../../assets/images/bg1.webp';

const Header = () => {
    return (
        <header className="header-2" id="header">
            <div className="page-header min-vh-90 relative" style={{ backgroundImage: `url(${bgImage})` }}>
                <span className="mask bg-gradient-dark opacity-8"></span>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 text-start mx-auto">
                            <h5 className="text-white opacity-7 pt-3 mt-n5">Hello There!</h5>
                            <h1 className="text-white">Welcome to <small class="opacity-7">MSavvy Blog</small></h1>
                            <div className="row">
                                <div className="col-lg-7 col-sm-8">
                                    <p className="text-white font-weight-bolder opacity-7 mt-1">
                                        Your ultimate destination for cutting-edge technologies, insights
                                        and discoveries. In this captivating blog website, we delve into
                                        the ever-evolving latest trends, innovations, and breakthroughs
                                        that are shaping our future.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header;