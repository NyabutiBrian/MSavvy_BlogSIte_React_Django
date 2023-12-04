import React from 'react';
import carousel1 from '../../assets/images/cover.webp';
import carousel2 from '../../assets/images/codescreen.webp';
import carousel3 from '../../assets/images/monitor.webp';
import carousel4 from '../../assets/images/bluebrainlogo.webp';
import carousel5 from '../../assets/images/neonroom.webp';

const CarouselSlider = () => {
  return (
    <section id="carouselChange">
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={carousel1} className="d-block w-100" alt="..." />
                                <span className="mask bg-gradient-dark opacity-8"></span>
                                <div className="carousel-caption">
                                    <h2 className="text-white">In the intricate tapestry of code, software engineers...</h2>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <img src={carousel2} className="d-block w-100" alt="..." />
                                <span className="mask bg-gradient-dark opacity-8"></span>
                                <div className="carousel-caption">
                                    <h2 className="text-white">...wield the threads of logic, crafting digital symphonies...</h2>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <img src={carousel3} className="d-block w-100" alt="..." />
                                <span className="mask bg-gradient-dark opacity-8"></span>
                                <div className="carousel-caption">
                                    <h2 className="text-white">...that orchestrate the dance of machines...</h2>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <img src={carousel4} className="d-block w-100" alt="..." />
                                <span className="mask bg-gradient-dark opacity-8"></span>
                                <div className="carousel-caption">
                                    <h2 className="text-white">...it is the art of turning imagination into innovation...</h2>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <img src={carousel5} className="d-block w-100" alt="..." />
                                <span className="mask bg-gradient-dark opacity-8"></span>
                                <div className="carousel-caption">
                                    <h2 className="text-white">...where lines of code become the brushstrokes painting the canvas of technological progress.</h2>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CarouselSlider;