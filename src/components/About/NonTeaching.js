import React from 'react'


const NonTeaching = () => {
    document.title="A.I.J ITI - Non-Teaching Staff";

    return (
        <>
            <h1 className='text-center h1-ubuntu photo-h1 m-4'>Non Teaching Staff</h1>
            <div className="container h2-ubuntu">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <a href='Images/About/user.jpg'><img src='Images/About/user.jpg' className="card-img-top" alt="..." /></a>
                            <div className="card-body">
                                <h5 className="card-title text-center">Mr.Ulde Rafique A.Kadir (Head clerk)</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <a href='Images/About/user.jpg'><img src='Images/About/user.jpg' className="card-img-top" alt="..." /></a>
                            <div className="card-body">
                                <h5 className="card-title text-center">Mr.Kable A.Rahman Akram (Junior Clerk)</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <a href='Images/About/user.jpg'><img src='Images/About/user.jpg' className="card-img-top" alt="..." /></a>
                            <div className="card-body">
                                <h5 className="card-title text-center">Mr.Dakhni Rameez  A.R. (Store Keeper)</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card h-100">
                            <a href='Images/About/user.jpg'><img src='Images/About/user.jpg' className="card-img-top" alt="..." /></a>
                            <div className="card-body">
                                <h5 className="card-title text-center">Mr.Khan A.Hamid  I (Peon)</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card h-100">
                            <a href='Images/About/user.jpg'><img src='Images/About/user.jpg' className="card-img-top" alt="..." /></a>
                            <div className="card-body">
                                <h5 className="card-title text-center">Mr.Daroge Sameer Y (Peon)</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NonTeaching