import React from 'react'
import '../CSS/partners.css'




const Partners = () => {
  return (
    <div  id='partners' className='partners position-relative'>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-4 col-md-2 col-6 '>
                    <div className='pic-wrap'>
                        <div className='inner-container thumbnail clearfix'>
                            <a href='#'className='position-relative '>
                                <figure>
                                    <img src={require('../images/partner1.jpg')} className="partner-image img-responsive"/>
                                    <img src={require('../images/partner1_hover.jpg')} className="partner-hover-image"/>
                                </figure>
                            </a>
                        </div>

                    </div>
                   

                </div>
                <div className='col-sm-4 col-md-2 col-6 '>
                <div className='pic-wrap'>
                        <div className='inner-container thumbnail clearfix'>
                            <a href='#'className='position-relative '>
                                <figure>
                                    <img src={require('../images/partner2.jpg')} className="partner-image img-responsive"/>
                                    <img src={require('../images/partner2_hover.jpg')} className="partner-hover-image"/>
                                </figure>
                            </a>
                        </div>

                    </div>

                </div>
                <div className='col-sm-4 col-md-2 col-6 '>
                <div className='pic-wrap'>
                        <div className='inner-container thumbnail clearfix'>
                            <a href='#'className='position-relative '>
                                <figure>
                                    <img src={require('../images/partner3.jpg')} className="partner-image img-responsive"/>
                                    <img src={require('../images/partner3_hover.jpg')} className="partner-hover-image"/>
                                </figure>
                            </a>
                        </div>

                    </div>

                </div>
                <div className='col-sm-4 col-md-2 col-6 '>
                <div className='pic-wrap'>
                        <div className='inner-container thumbnail clearfix'>
                            <a href='#'className='position-relative '>
                                <figure>
                                    <img src={require('../images/partner4.jpg')} className="partner-image img-responsive"/>
                                    <img src={require('../images/partner4_hover.jpg')} className="partner-hover-image"/>
                                </figure>
                            </a>
                        </div>

                    </div>

                </div>
                <div className='col-sm-4 col-md-2 col-6 '>
                <div className='pic-wrap'>
                        <div className='inner-container thumbnail clearfix'>
                            <a href='#'className='position-relative '>
                                <figure>
                                    <img src={require('../images/partner5.jpg')} className="partner-image img-responsive"/>
                                    <img src={require('../images/partner5_hover.jpg')} className="partner-hover-image"/>
                                </figure>
                            </a>
                        </div>

                    </div>

                </div>
                <div className='col-sm-4 col-md-2 col-6 '>
                <div className='pic-wrap'>
                        <div className='inner-container thumbnail clearfix'>
                            <a href='#'className='position-relative '>
                                <figure>
                                    <img src={require('../images/partner6.jpg')} className="partner-image img-responsive"/>
                                    <img src={require('../images/partner6_hover.jpg')} className="partner-hover-image"/>
                                </figure>
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Partners