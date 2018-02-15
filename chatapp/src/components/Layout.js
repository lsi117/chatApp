import React, {Component} from 'react';

export default class Layout extends Component{

  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    const {title} = this.props
    return(
      <div class="container">
        {title}
      </div>
    );
  }
}
