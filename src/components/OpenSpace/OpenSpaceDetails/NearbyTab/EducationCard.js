import React, { Component } from "react";
import SingleEcard from "./SingleEcard";
import Axios from "axios";

class EducationCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ""
    };
  }

  fetchInfo = () => {
    Axios.get(
      `http://139.59.67.104:8011/api/v1/near_by_me?type=education%20facility&count=100&distance=3&id=${localStorage.getItem(
        "OpenspaceID"
      )}`
    ).then(response => {
      this.setState({
        data: response.data
      });
    });
  };
  componentDidMount() {
    this.fetchInfo();
  }
  render() {
    this.props.id && localStorage.setItem("OpenspaceID", this.props.id);

    return (
      <>
        {/* <div class="facility-overview flex-between">
          <div class="overview-item">
              <h6>1</h6>
              <p>district hospital</p>
          </div>
          <div class="overview-item">
              <h6>13</h6>
              <p>government Hospital</p>
          </div>
          <div class="overview-item">
              <h6>1</h6>
              <p>private Hospital</p>
          </div>
      </div>
        */}
        <div class="space-list nearby-list">
          <ul>
           
                {this.state.data &&
                  this.state.data.facility.map(e => {
                    return <SingleEcard key={e.id} name={e.name} />;
                  })}
            
          </ul>
        </div>
      </>
    );
  }
}
export default EducationCard;
