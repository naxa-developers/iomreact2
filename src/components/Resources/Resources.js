import React, { Component } from "react";

// import '../../css/style.css';
// import '../../scss/style.scss';


import Navbar from "../Home/Navbar";
import SearchFilter from "./SearchFilter";
import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";



class Resources extends Component {
  render() {
    return (
      <div>
        <Navbar />

<body className="">
    <div className="page-wrap">
     
        
        {/* <!-- main-content --> */}
        <main className="main-content">
            <div className="container">
                <div className="row-wrap mt-150">
                    <div className="row">
                        {/* <!-- form-section --> */}
                        <div className="col-12 col-md-3 col-xl-4">
                            <div className="form-section">
                                {/* <!-- form-search-bar --> */}
                                <form className="form-search">
                                    <div className="form-wrap">
                                        <button className="btn btn-search" type="submit">
                                            <i className="humanitarian-icon-Search search-icon" aria-hidden="true"></i>
                                        </button>
                                        <input className="form-control" type="text" placeholder="Search resources by keyword"
                                        aria-label="Search" />
                                    </div>
                                </form>

                                <div className="dropdown-select">
                                    <div className="categories-dropdown">   
                                        <select className="selectpicker">
                                            <option selected>Categories</option>
                                            <option value="1">Plans & Policies</option>
                                            <option value="2">Research</option>
                                            <option value="3">Multimedia</option>
                                        </select>
                                    </div>

                                    <div className="document-types-dropdown">
                                        <select className="selectpicker">
                                            <option>Document types</option>
                                            <option>Publication</option>
                                            <option>Video</option>
                                            <option>Audio</option>
                                        </select>  
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        {/* <!--  content-section --> */}
                        <div className="col-12 col-md-9 col-xl-8">
                            <div className="content-section">
                                <div className="row-section-wrap">
                                    <div className="row">
                                        <div className="col-12 col-md-9">
                                            <div className="content-wrapper">
                                                <div className="image-section">
                                                    <figure>
                                                        <img src="./images/resources-img1.png" alt="" />
                                                    </figure>
                                                </div>
                                                <div className="content-col-wrap">
                                                    <div className="content-element-wrap">
                                                        <h3 className="h3-title">Evidence from Measuring Community Flood Resilience in Asia</h3>
                                                        <span className="datetime">1 Nov. 2019</span>
                                                        <p>Disaster risk and subsequent loss and damage in Asia are increasing at an alarming rate, threatening socioeconomic gains.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-3">
                                            <div className="download-section">
                                                <div className="icon-wrap-section">
                                                    <button className="btn btn-share"><i className="humanitarian-icon-Share"></i></button>
                                                    <button className="btn btn-download"><i className="humanitarian-icon-Download"></i></button>
                                                </div>
                                                <div className="para-wrap-section">
                                                    <p className="para-details-block">
                                                        <span className="title">Type</span>
                                                        <span className="subtitle">Publication</span>
                                                    </p>
                                                    <p className="para-details-block">
                                                        <span className="title">Category</span>
                                                        <span className="subtitle">Plans & policies</span>
                                                    </p>
                                                </div>   
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row-section-wrap">
                                    <div className="row">
                                        <div className="col-12 col-md-9">
                                            <div className="content-wrapper">
                                                <div className="image-section">
                                                    <figure>
                                                        <img src="./images/resources-img2.png" alt="" />
                                                    </figure>
                                                </div>
                                                <div className="content-col-wrap">
                                                    <div className="content-element-wrap">
                                                        <h3 className="h3-title">Resilience Insights: Lessons from the Global Resilience Partnership</h3>
                                                        <span className="datetime">12 Aug, 2019</span>
                                                        <p>A new Global Resilience Partnership (GRP) and Itad report distils and illuminates the latest evidence from across the breadth.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-3">
                                            <div className="download-section">
                                                
                                                <div className="icon-wrap-section">
                                                    <button className="btn btn-share"><i className="humanitarian-icon-Share"></i></button>
                                                    <button className="btn btn-download"><i className="humanitarian-icon-Download"></i></button>
                                                </div>
                                                <div className="para-wrap-section">
                                                    <p className="para-details-block">
                                                        <span className="title">Type</span>
                                                        <span className="subtitle">Video</span>
                                                    </p>
                                                    <p className="para-details-block">
                                                        <span className="title">Category</span>
                                                        <span className="subtitle">Research</span>
                                                    </p>
                                                </div>
                                                 
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>

                                <div className="row-section-wrap">
                                    <div className="row">
                                        <div className="col-12 col-md-9">
                                            <div className="content-wrapper">
                                                <div className="image-section">
                                                    <figure>
                                                        <img src="./images/resources-img3.png" alt="" />
                                                    </figure>
                                                </div>
                                                <div className="content-col-wrap">
                                                    <div className="content-element-wrap">
                                                        <h3 className="h3-title">Bearing the climate burden: how households in Bangladesh are spending too much</h3>
                                                        <span className="datetime">8 Jun. 2019</span>
                                                        <p>Disaster risk and subsequent loss and damage in Asia are increasing at an alarming rate, threatening socioeconomic gains.</p>
                                                    </div>  
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-3">
                                            <div className="download-section">
                                                <div className="icon-wrap-section">
                                                        <button className="btn btn-share"><i className="humanitarian-icon-Share"></i></button>
                                                        <button className="btn btn-download"><i className="humanitarian-icon-Download"></i></button>
                                                </div>

                                                <div className="para-wrap-section">
                                                    <p className="para-details-block">
                                                        <span className="title">Type</span>
                                                        <span className="subtitle">Audio</span>
                                                    </p>
                                                    <p className="para-details-block">
                                                        <span className="title">Category</span>
                                                        <span className="subtitle">Multimedia</span>
                                                    </p>
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
        </main>

        {/* <!-- pagination --> */}
        <div className="pagination">
            <div className="container">
                <div className="pagination-link-wrap">
                    <div className="pagination-center">
                        <a href="#">&laquo;</a>
                        <a href="#" className="active">1</a>
                        <a href="#">2</a>
                        <a href="#">&raquo;</a>
                    </div>
                </div>
            </div>
        </div>

    </div>

</body>
</div>
    
     
    );
  }
}
export default Resources;
