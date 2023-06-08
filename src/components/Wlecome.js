import React from 'react'
import tradegif from "../assets/tradegif.gif"
import { GrSemantics } from 'react-icons/gr';
import { SiPastebin } from 'react-icons/si';
import { RiCustomerService2Line } from 'react-icons/ri';
 

const Wlecome = () => {
    return (
        <div>
            <div className='container-fluid'>

                <div className='welcome_msg'>
                    Welcome  To <b>MTFE</b>
                </div>



                <div className='down_text'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='text'>
                                <h1>Integrity First</h1>
                                <h1>Formal Experence</h1>
                                <h1>Finacial Security</h1>
                                <h1 className='blue'>Trade With Confident</h1>
                            </div>
                            <div className='btns'>
                            <div className="row">
                                <div className="col-md-6 text-center">
                                    <button id="btnSearch" class="btn btn-primary" Style="width: 100px;" OnClick="btnSearch_Click" >REGISTER</button>
                                    &nbsp; &nbsp; <button id="btnClear" class="btn btn-danger " Style="width: 100px;" OnClick="btnClear_Click" >LOGIN</button>
                                    &nbsp; &nbsp; <button id="btnClears"class="btn btn-link" Style="width: 100px;" OnClick="btnClear_Click" >DEMO</button>
                                </div>
                            </div>
                            </div>
                           <div className='footer_data'>
                                <div className='row'>
                                    <div className='col-sm-3'>
                                        <div className='authorised'>
                                        <div className='icons'>
                                        <GrSemantics/>
                                        </div>
                                        <h6>Authoritative</h6>
                                        <h6>Supervision</h6>
                                        </div>
                                       
                                    </div>
                                    <div className='col-sm-3'>
                                        <div className='fund'>
                                            <div className='icons'>
                                            <SiPastebin/>
                                            </div>
                                        
                                        <h6>Fund Security</h6>
                                        <h6>Capital siolation </h6>
                                        <h6>of top Banks</h6>
                                        </div>
                                       
                                    </div>
                                    <div className='col-sm-3'>
                                        <div className='customer'>
                                        <div className='icons'>
                                        <RiCustomerService2Line/>
                                        </div>
                                        <h6>Customer Services</h6>
                                        <h6>7X24 Full Service</h6>
                                      
                                        </div>
                                       
                                    </div>
                                </div>
                           </div>

                        </div>

                        <div className='col-lg-6'>
                            <div className='images'>
                                <img src={tradegif} />
                            </div>
                        </div>

                    </div>

                </div>

            </div>



        </div>
    )
}

export default Wlecome