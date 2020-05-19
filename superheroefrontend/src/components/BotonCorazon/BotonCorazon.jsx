//@ts-check
import React, { useState } from "react";
import Heart from "react-animated-heart";
 



class Likes extends React.Component {

  constructor(props){

    super(props);
    this.state ={
      likes: 0,
      updated: false
    }
    this.updateLikes = this.updateLikes.bind(this);
  }

  updateLikes() {

    if(!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          updated: true
        };
      });
    } else {

      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          updated: false
        };
      });
    }


  }

  render(){

    return(
      <div>
        <div  > 
        <Heart onClick={this.updateLikes} /> 
        </div>
        <p>{this.state.likes}</p>
      </div>
    );

  }


}

export default Likes;
