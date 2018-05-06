import React, { Component } from 'react';
import { connect } from 'react-redux';

class Assessment extends Component {

  constructor (props) {
    super(props)
  }

  render(){

    const { selectedTeam } = this.props;

    return (
      <div>Hello {selectedTeam}</div>
    )
  }

}


const mapStateToProps = function(state) {
  return {
    selectedTeam: state.team
  }
}

const mapDispatchToProps = function(dispatch) {
  return {

  }
}

const assessmentContainer = connect(mapStateToProps, mapDispatchToProps)(Assessment);

export default assessmentContainer;
