import axios from 'axios';

const GET_TEAM = 'GET_TEAM';

export function getTeam(team) {
  return {
    type: GET_TEAM,
    team: team
  }
}

export function fetchTeam(id) {
  return dispatch => {
    return axios.get(`/teams/${id}`)
    .then(res => res.data)
    .then(team => {
      const action = getTeam(team);
      dispatch(action);
    })
  }
}

const reducer = function(state = 'Avengers', action) {
  switch (action.type) {
    case GET_TEAM:
      return action.team;
    default:
      return state;
  }
}

export default reducer;
