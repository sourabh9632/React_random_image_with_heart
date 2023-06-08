import React from 'react'
import trade from "../assets/trade.png"
function Register() {
    return (
        <div>

            <div className='register'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className="user-ragistration">
                            <div className="container register">
                                <div className="row">
                                    <div className="col-md-3 register-left">
                                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                                        <h3>Welcome</h3>
                                        <p>You are 30 seconds away from earning your own money!</p>
                                        <input type="submit" name="" value="Login" /><br />
                                    </div>
                                    <div className="col-md-9 register-right">
                                        {/* <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Employee</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Hirer</a>
                            </li>
                        </ul> */}
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                <h3 className="register-heading">Register</h3>
                                                <div className="row register-form">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <select className="form-control">
                                                                <option className="hidden" selected disabled> Phone Number</option>
                                                                <option>+91</option>
                                                                <option>+191</option>
                                                                <option>+81</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="number" className="form-control" placeholder="Phone Number*" value="" />
                                                        </div>
                                                        <div className="form-group">
                                                            <button className='btn btn-primary'>Continue</button>
                                                        </div>
                                                        <div className="form-group">
                                                            _________________or_________________
                                                        </div>
                                                        <div className="form-group">
                                                        <button className='btn btn-primary'>Email Registration</button>
                                                        </div>


                                                    </div>
                                                    <div className="col-md-6">
                                            <img src={trade}/>
                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                <h3 className="register-heading">Apply as a Hirer</h3>
                                                <div className="row register-form">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="First Name *" value="" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Last Name *" value="" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="email" className="form-control" placeholder="Email *" value="" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" maxlength="10" minlength="10" className="form-control" placeholder="Phone *" value="" />
                                                        </div>


                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input type="password" className="form-control" placeholder="Password *" value="" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="password" className="form-control" placeholder="Confirm Password *" value="" />
                                                        </div>
                                                        <div className="form-group">
                                                            <select className="form-control">
                                                                <option className="hidden" selected disabled>Please select your Sequrity Question</option>
                                                                <option>What is your Birthdate?</option>
                                                                <option>What is Your old Phone Number</option>
                                                                <option>What is your Pet Name?</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="`Answer *" value="" />
                                                        </div>
                                                        <input type="submit" className="btnRegister" value="Register" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>





        </div>
    )
}

export default Register