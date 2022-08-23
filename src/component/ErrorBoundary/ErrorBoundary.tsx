import React, { Component } from "react";

import PageNotFound from '../../assets/no-activity.png';
class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: '',
    errorInfo: ''
  };

  componentDidCatch(error:any, errorInfo:any): void {
    this.setState({hasError: true, errorMessage: error, errorInfo});
  }

  render() {
     if(this.state.hasError){
      return (<div className={`col-12 d-flex pt-5 flex-column justify-content-center 
      align-items-center mx-auto`}>
        <img src={PageNotFound} 
          alt="" className="noCourseImg"/>
        <h1 className="noDiscussionH1 mt-3">Page Not Found</h1>
        <p className="mb-0 noDiscussionP mt-3 mb-5 "  >
        Sorry, it seems the page you are looking for does not exist or has been moved to a different location.
        </p>
        
        <a href="/">
          <button className="btn sme-btn-primary font-weight-600 no-border" style={{width: '15rem'}}>
            Goto Home
          </button>
        </a>
      </div>);

  }
  // return  this.props?.children;
  }
}

export default ErrorBoundary;
