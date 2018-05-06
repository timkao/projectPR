import axios from 'axios';

const GET_TEAMS = 'GET_TEAMS';

export function getTeams(teams) {
  return {
    type: GET_TEAMS,
    teams: teams
  }
}

export function fetchTeams() {
  return dispatch => {
    return axios.get('/teams')
    .then(res => res.data)
    .then(teams => {
      const action = getTeams(teams);
      dispatch(action);
    })
  }
}

const reducer = function(state = [], action) {
  switch (action.type) {
    case GET_TEAMS:
      return action.teams;
    default:
      return state;
  }
}

export default reducer;
