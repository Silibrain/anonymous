import React from 'react'

class ReportContainer extends React.Component {
  constructor(props){
    super(props);
    
    window.intuit.ipp.anywhere.setup({
      grantUrl: 'https://developer.intuit.com/v2/OAuth2Playground/RedirectUrl',
      datasources: {
        quickbooks : true,
        payments : true
      },
      paymentOptions:{
        intuitReferred : true
      }
    })
    
  }
  componentDidMount() {
      let buttonContainer = document.getElementById("intuButton")
      const connectToIntuit = document.createElement('ipp:connectToIntuit');
      buttonContainer.appendChild(connectToIntuit);
  }
  render(){
      return (
          <div id="intuButton"></div>
      )
  }
}


export default ReportContainer

// import React from "react";
// import "./style.css";

// export const ReportsContainer = ({ fluid, children }) => (
//   <div className={`container${fluid ? "-fluid" : ""}`}>
//     {children}
//   </div>
// );

// export default ReportsContainer
