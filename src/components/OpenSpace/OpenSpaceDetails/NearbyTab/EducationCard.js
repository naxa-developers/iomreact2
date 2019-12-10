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
      `https://iomapi.naxa.com.np/api/v1/near_by_me?type=education%20facility&count=100&distance=2&id=${localStorage.getItem(
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
