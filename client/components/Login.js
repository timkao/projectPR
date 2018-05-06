import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Login (props) {

    const { teams } = props;

    return (
      <ul>
        {
          teams.map(team => {
            return (
              <li key={team.id}>{team.name}</li>
            )
          })
        }
      </ul>
    )

}

const mapStateToProps = function(state) {
  return {
    teams: state.teams
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    handleChange(ev) {
      console.log('check change ------------')
    }
  }
}

const loginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)

export default loginContainer;
