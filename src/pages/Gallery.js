import React from "react";
import "../CSS/gallery.css";
import { NavLink } from "react-router-dom";
import gallery01 from "../images/gallery01.jpg";
import gallery02 from "../images/gallery02.jpg";
import gallery03 from "../images/gallery03.jpg";
import gallery04 from "../images/gallery04.jpg";
import gallery05 from "../images/gallery05.jpg";
import gallery06 from "../images/gallery06.jpg";
import gallery07 from "../images/gallery07.jpg";
import gallery08 from "../images/gallery08.jpg";
import gallery09 from "../images/gallery09.jpg";
import gallery10 from "../images/gallery10.jpg";
import gallery11 from "../images/gallery11.jpg";

const Gallery = () => {
  return (
    <>
      <div id="parallax2" className="parallax2-section">
        <div className="container"></div>
      </div>

      <div className="about-breadCrumb">
        <div className="container">
          <div className="about-breadCrumb1 mt-0">
            <NavLink to={"/"}>Home</NavLink>
            <span>/</span>Gallery
          </div>
        </div>
      </div>

      <div class="container">

        <div class="row">

            <div class="col-lg-12">


                <ul class="filters text-center">
                    <li class="active" data-filter="*"><a href="#!">All</a></li>
                    <li data-filter=".flights"><a href="#!">Flights</a></li>
                    <li data-filter=".hotels"><a href="#!">Hotels</a></li>
                    <li data-filter=".Cruises"><a href="#!">Cruises</a></li>
                </ul>

                <div class="projects">

                    <div class="row">

                        <div class="col-lg-4 item html">
                            
                            <div class="card">

                                <div class="card-head">
                                    <img src={gallery01} alt="" class="img-fluid card-img"/>
                                    <div class="card-overlay"></div>
                                    <div class="card-hover">
                                        <h2>Lorem, ipsum.</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quo repudiandae eaque maiores provident deserunt.</p>
                                    </div>
                                </div>

                                

                            </div>

                        </div>

                        <div class="col-lg-4 item css">
                            
                            <div class="card">

                                <div class="card-head">
                                    <img src={gallery02} alt="" class="img-fluid card-img"/>
                                    <div class="card-overlay"></div>
                                    <div class="card-hover">
                                        <h2>Lorem, ipsum.</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quo repudiandae eaque maiores provident deserunt.</p>
                                    </div>
                                </div>

                              

                            </div>

                        </div>
                        
                        <div class="col-lg-4 item javascript">
                            
                            <div class="card">

                                <div class="card-head">
                                    <img src={gallery03} alt="" class="img-fluid card-img"/>
                                    <div class="card-overlay"></div>
                                    <div class="card-hover">
                                        <h2>Lorem, ipsum.</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quo repudiandae eaque maiores provident deserunt.</p>
                                    </div>
                                </div>

                               

                            </div>

                        </div>
                        
                        <div class="col-lg-4 item html">
                            
                            <div class="card">

                                <div class="card-head">
                                    <img src={gallery04} alt="" class="img-fluid card-img"/>
                                    <div class="card-overlay"></div>
                                    <div class="card-hover">
                                        <h2>Lorem, ipsum.</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quo repudiandae eaque maiores provident deserunt.</p>
                                    </div>
                                </div>

                               
                            </div>

                        </div>
                   
                        <div class="col-lg-4 item css">
                            
                            <div class="card">

                                <div class="card-head">
                                    <img src={gallery05} alt="" class="img-fluid card-img"/>
                                    <div class="card-overlay"></div>
                                    <div class="card-hover">
                                        <h2>Lorem, ipsum.</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quo repudiandae eaque maiores provident deserunt.</p>
                                    </div>
                                </div>



                            </div>

                        </div>

                        <div class="col-lg-4 item html">
                            
                            <div class="card">

                                <div class="card-head">
                                    <img src={gallery06} alt="" class="img-fluid card-img"/>
                                    <div class="card-overlay"></div>
                                    <div class="card-hover">
                                        <h2>Lorem, ipsum.</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quo repudiandae eaque maiores provident deserunt.</p>
                                    </div>
                                </div>

                                

                            </div>

                        </div>

                        <div class="col-lg-4 item html">
                            
                            <div class="card">

                                <div class="card-head">
                                    <img src={gallery07} alt="" class="img-fluid card-img"/>
                                    <div class="card-overlay"></div>
                                    <div class="card-hover">
                                        <h2>Lorem, ipsum.</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quo repudiandae eaque maiores provident deserunt.</p>
                                    </div>
                                </div>

                               
                            </div>

                        </div>

                        <div class="col-lg-4 item html">
                            
                            <div class="card">

                                <div class="card-head">
                                    <img src={gallery08} alt="" class="img-fluid card-img"/>
                                    <div class="card-overlay"></div>
                                    <div class="card-hover">
                                        <h2>Lorem, ipsum.</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quo repudiandae eaque maiores provident deserunt.</p>
                                    </div>
                                </div>

                              

                            </div>

                        </div>

                        <div class="col-lg-4 item html">
                            
                            <div class="card">

                                <div class="card-head">
                                    <img src={gallery09} alt="" class="img-fluid card-img"/>
                                    <div class="card-overlay"></div>
                                    <div class="card-hover">
                                        <h2>Lorem, ipsum.</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quo repudiandae eaque maiores provident deserunt.</p>
                                    </div>
                                </div>

                               
                            </div>

                        </div>




                    </div>

                </div>

            </div>

        </div>

    </div>
      

 


      

    </>
  );
};

export default Gallery;
