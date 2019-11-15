import React, { Component } from 'react';
import Slider from "react-slick";
import  {connect} from 'react-redux';
import Axios from 'axios';



import slider2 from '../../img/slider-2.jpg';



 class ImageSlider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             sliderData: null
        }
    }
    


    componentDidMount() {

        Axios.get(`http://139.59.67.104:8011/api/v1/slider/`)
        .then( res => {
            const Sliderdata = res.data; 
            this.setState({sliderData: Sliderdata})
            console.log("slide", this.state.sliderData);
            

        })
    }
    render() {
        // Use responsive slick here after calculating breakpoints
        const settings = {
            arrows: false,
            autoplay: true,
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1
          };

        return (
            <section className="home-slider">
            <div className="slider-wrap">
                <div className="container">
                    <div className="intro-slider">
                    <Slider {...settings}> 
                        <div className="intro-item">
                           
                            <div className="figure" style={{backgroundImage: `url(http://139.59.67.104:8011/media/slider/tab_1.jpg)`}}>

                            </div>
                            <h3> {this.state.sliderData&&this.props.language =="0" ? this.state.sliderData[0].title : this.state.sliderData&&this.state.sliderData[0].title_nep  }</h3>     
                        </div>
                        <div className="intro-item">
                            <div className="figure" style={{backgroundImage: `url(http://139.59.67.104:8011/media/slider/tab.jpg)`}}>

                            </div>
                            <h3> {this.state.sliderData&&this.props.language =="0" ? this.state.sliderData[1].title : this.state.sliderData&&this.state.sliderData[1].title_nep  }</h3> 
                        </div>
                        </Slider>
                    </div>
                    
                </div>
            </div>
        </section>
     
          
              
            
        )
    }
}
const mapStateToProps = (state) => {
    return {
         language: state.language
     }
  }
export default connect(mapStateToProps)(ImageSlider);
