import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import {connect } from 'react-redux';


class ReportCard extends Component {


  CalcTime = (days) => {
    var weeks = parseInt(days/7);
    var months = parseInt(days/30);
    return (months > 0 ? months + " month" + (months > 1 ? "s, " : ", ") : "") + (weeks > 0 ? weeks + " week" + (weeks > 1 ? "s, " : ", ") : "") + (days > 0 ? days + " day" + (days > 1 ? "s " : " ") : "") 

   }
    
    componentDidMount(){
      console.log(this.CalcTime(34));
    }


  render() {

  
    return (
    <>
        <li>
          <div class="report-content" onClick ={() => {
              
              this.props.history.push('/reportdetails')
            }}>
            <h5  onClick={() => {
            
              this.props.dispatch({ type: "reportClicked", id:this.props.id  })
              
              }} >
              {this.props.title} 
              <i
                className={this.props.status=="pending" ? "material-icons pending" : "material-icons success"}
                data-toggle="tooltip"
                data-placement="top"
                title="Pending"
              >
               
              {this.props.status=="pending" ? "timer" : "check_circle"}
              </i>
            </h5>
             <div className="loc-time flex-start">
          <a >{this.props.ReportLocat}</a>
            <time>{this.CalcTime(this.props.daysCount) }</time>
            </div> 
          </div>
          {/* <div className="report-status">
            <label className="unsuccess">Urgency</label>
            <span>{this.props.urgency}</span>
          </div> */}
        </li>
     </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ...state,
       language: state.language,
      //  id: state.reportID
   }
}

export default withRouter(connect(mapStateToProps)(ReportCard));
