import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';

class UserDetails extends Component {

  render() {
    //Null check during page load when the action gets invoked
    if(!this.props.user){
      return (
          <h6>Select a user to see the details...</h6>
      );
    }
    return (
      <div>
        <h4>{this.props.user.first} {this.props.user.last} is {this.props.user.age} years old..</h4>
        <h5>Known for - {this.props.user.description}</h5>
        <img src={this.props.user.thumbnail}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser
  };
}

export default connect(mapStateToProps)(UserDetails);
