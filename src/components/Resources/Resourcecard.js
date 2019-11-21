import React, { Component } from "react";
import {Link} from 'react-router-dom'
import Axios from "axios";
import MaterialIcon from "material-icons-react";

class Resourcecard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
      downloadUrl: ''
    };
  }

  // componentDidMount(){
  //     Axios({
  //         url: 'http://139.59.67.104:8011/api/v1/resource/',
  //         method: 'GET',
  //         responseType: 'blob',
  //     })
  //     .then(response=>{
  //         console.log('api', response.data);

  //         this.setState({files:response.data})
  //         console.log("download", this.state.files);

  //     })

  // }

  render() {
  console.log(this.props);
  
 
    return (
      <>
        <div className="row-section-wrap">
          <div className="row">
            <div className="col-12 col-md-9">
              <div className="content-wrapper">
                <div className="image-section">
                  <figure>
                    <img src={this.props.image} alt="" />
                  </figure>
                </div>
                <div className="content-col-wrap">
                  <div className="content-element-wrap">
                    <h3 className="h3-title">{this.props.title}</h3>
                    <span className="datetime">{this.props.date}</span>
                    <p>{this.props.description}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="download-section">
                <div className="icon-wrap-section">
                  {/* <button className="btn btn-share"><MaterialIcon icon="share" color="#418fde"></MaterialIcon></button>  */}
                  <div>
                  {/* {this.props.document_type == 0
                        ? this.props.audio
                        : this.props.document_type == 1
                        ? this.props.video
                        : this.props.document_type == 2
                        ? this.props.publication
                        : "default"} */}
                  </div>
                  <a href={this.props.document_type==0
                     ? this.props.publication 
                     : this.props.document_type==1
                      ? this.props.audio
                      ? this.props.document_type==2
                      : this.props.video
                      :"jhj"
                    }  download target="_blank">
                    <button className="btn btn-download">
                      <i className="humanitarian-icon-Download"></i>
                    </button>
                  </a>
                </div>
                <div className="para-wrap-section">
                  <p className="para-details-block">
                    <span className="title">Type</span>
                    <span className="subtitle">
                      {this.props.document_type == 2
                        ? "Publication"
                        : this.props.document_type == 1
                        ? "Video"
                        : this.props.document_type == 0
                        ? "Audio"
                        : ""}
                    </span>
                  </p>
                  <p className="para-details-block">
                    <span className="title">Category</span>
                    <span className="subtitle">
                      {this.props.categories == 0
                        ? "Plans & Policies"
                        : this.props.categories == 1
                        ? "Research"
                        : this.props.categories == 2
                        ? "Multimedia"
                        : "None "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Resourcecard;
