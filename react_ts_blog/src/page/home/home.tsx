import React from "react";
import './home.scss'
class Home extends React.Component{
  render(): React.ReactNode {
      return (
        <div className="home">
          <div className="content_box">
            <div className="content"></div>
            <div className="tops_message"></div>
          </div>
        </div>
      )
  }
}
export default Home