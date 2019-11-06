import React, { Component } from 'react';
import axios from 'axios';

import post1 from '../../img/post-1.jpg'
import post2 from '../../img/post-2.jpg'
import post3 from '../../img/post-3.jpg'
import post4 from '../../img/post-4.jpg'
import post5 from '../../img/post-1.jpg'

class Identification extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             steps: []
        }
    }
    
    // state = {
    //     steps: []
    // }
    componentDidMount() {
        axios.get(`http://139.59.67.104:8011/api/v1/identify_open_space/`)
        .then( res => {
            const steps = res.data;
            this.setState({ steps });
            
        })
    }
    render() {
        return (

            <div>
                <section className="process ptb-150">
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{
                        flexBasis: '50%'
                    }}>
                        <div className="process-left">
                            <h3 className="openspace-title">Open space indentification process</h3>
                            <p>Open space was identified by conducting workshops and interaction programs with locally
                                elected
                                representatives and local residents.</p>
                        </div>
                     
                    </div>
                    <div className="col-md-6" style={{
                        flexBasis: '80%',
                        height: '100vh', 
                        overflow: 'auto'
                    }}>

                        <div className="process-content">
                        { this.state.steps.map(step => <div> {step.title}<img src={step.image} /> </div>)}
                            {/* <div className="post-meta">
                                <figure>
                                    <img src={post1} alt="post" />
                                </figure>
                                <h5><span>1</span>Preparatory Phase & Desk Study</h5>
                            </div>
                            <div className="post-meta">
                                <figure>
                                    <img src={post2} alt="post" />
                                </figure>
                                <h5><span>2</span>Identification by Local Representatives</h5>
                            </div>
                            <div className="post-meta">
                                <figure>
                                    <img src={post3} alt="post" />
                                </figure>
                                <h5><span>3</span>Interaction with Locals and Finalization</h5>
                            </div>
                            <div className="post-meta">
                                <figure>
                                    <img src={post4} alt="post" />
                                </figure>
                                <h5><span>4</span>Field Survey and Data Collection</h5>
                            </div>
                            <div className="post-meta">
                                <figure>
                                    <img src={post5} alt="post" />
                                </figure>
                                <h5><span>5</span>Data Processing and GIS Mapping</h5>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
                
            </div>
        )
    }
}
export default Identification;
