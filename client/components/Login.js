import React from 'react';
import { connect } from 'react-redux';
import { getTeam } from '../store';

function Login (props) {

    const { teams, handleChange, handleSubmit, selectedTeam } = props;

    return (
      <form onSubmit={handleSubmit}>
        <select value={selectedTeam} onChange={handleChange}>
          {
            teams.map(team => {
              return (
                <option key={team.id} value={team.name}>{team.name}</option>
              )
            })
          }
        </select>
      <input type="submit" value="Submit" />
    </form>
    )

}

const mapStateToProps = function(state) {
  return {
    teams: state.teams,
    selectedTeam: state.team
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleChange(ev) {
      const action = getTeam(ev.target.value);
      dispatch(action);
    },

    handleSubmit(ev) {
      ev.preventDefault();
      ownProps.history.push('/home');
    }
  }
}

const loginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)

export default loginContainer;
