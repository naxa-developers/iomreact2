import React, { Component } from "react";
import fa from '../../../../img/school.png'



export default class SingleEcard extends Component {
  render() {
    return (
        <li>
        <div class="space">
        <figure>
          <img src={fa} alt="space" />
        </figure>
        <div class="space-content">
          <h5>{this.props.name}</h5>
          <p>
            <span>
              <i class="material-icons">phone</i>01-4250931
            </span>
            <span>
              <i class="material-icons">near_me</i>200 m
            </span>
          </p>
        </div>
     </div>
     </li>
    );
  }
}
