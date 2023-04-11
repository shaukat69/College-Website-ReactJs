import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
    document.title = "Anjuman Islam Janjira Sidi Zafar Shekhani Memorial Private Industrial Training Institute Murud Janjira";

    return (
        <>
            <div className="container">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src='Images/Carosel/home1.jpg' className="d-block w-100" alt="Loading" />
                        </div>
                        <div className="carousel-item">
                            <img src='Images/Carosel/home2.jpg' className="d-block w-100" alt="Loading" />
                        </div>
                        <div className="carousel-item">
                            <img src='Images/Carosel/home3.jpg' className="d-block w-100" alt="Loading" />
                        </div>
                        <div className="carousel-item">
                            <img src='Images/Carosel/home4.jpg' className="d-block w-100" alt="Loading" />
                        </div>
                        <div className="carousel-item">
                            <img src='Images/Carosel/home5.jpg' className="d-block w-100" alt="Loading" />
                        </div>
                        <div className="carousel-item">
                            <img src='Images/Carosel/home6.jpg' className="d-block w-100" alt="Loading" />
                        </div>
                        <div className="carousel-item">
                            <img src='Images/Carosel/home7.jpg' className="d-block w-100" alt="Loading" />
                        </div>
                        <div className="carousel-item">
                            <img src='Images/Carosel/home8.jpg' className="d-block w-100" alt="Loading" />
                        </div>
                        <div className="carousel-item">
                            <img src='Images/Carosel/home9.jpg' className="d-block w-100" alt="Loading" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>


            <div className='main-container'>
                <div className=" home-container">
                    <h2 className='my-4 home-heading text-center'>WELCOME TO ANJUMAN ISLAM JANJIRA SIDI ZAFAR SHEKHANI MEMORIAL PRIVATE INDUSTRIAL TRAINING INSTITUTE MURUD JANJIRA</h2>
                    <p>Anjuman Islam Janjira Sidi Zafar Shekhani Memorial Private Industrial Training Institute is situated in Raigarh Maharashtra. Anjuman Islam Janjira Sidi Zafar Shekhani Memorial Private Industrial Training Institute. is Industrial Training Institute under NCVT. Location of Anjuman Islam Janjira Sidi Zafar Shekhani Memorial Private Industrial Training Institute is Laxmikhar, Dasturi Naka,Murud Janjira, Dist. Raigad. Raigarh Maharashtra.</p>
                    <b>Institute Type: Private ITI</b>
                    <p>Private ITI is leading educational organisation in india. Teaching facualty of Private ITI is suprimo. ITI is providing latest Job oriented course for student. This Private ITI is powerd by <b>'Ministry of Skill Development and Entrepreneurship, Government of India for Craftsmen Training Scheme.</b> ITI is registered by government under<b>NCVT.</b></p>
                </div>
            </div>


                <h1 className="text-center h1-ubuntu h1-border my-4">Courses Available</h1>
                <div className="course-container h1-ubuntu mb-4">
                    <div className="left">
                        <div className="image">
                            <Link to="/mechanical" ><img src='Images/Diesel.jpg' alt="Loading" /></Link>
                            <div className="text">
                                Mechanical Diesel Course
                            </div>
                        </div>
                        <div className="image">
                            <Link to="/electrician" ><img src='Images/Electrician.jpg' alt="Loading" /></Link>
                            <div className="text">
                                Electrician
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="image">
                            <Link to="/motor"><img src='Images/Motor.jpg' alt="Loading" /></Link>
                            <div className="text">
                                Mechanic Motor Vehicle
                            </div>
                        </div>
                        <div className="image">
                            <Link to="/welder"><img src='Images/Welder.jpg' alt="Loading" /></Link>
                            <div className="text">
                                Welder
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Home