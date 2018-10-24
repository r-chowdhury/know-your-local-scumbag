let defaultState = {
  users: []
}

export function usersReducer(state = defaultState, action) {
  switch (action.type) {
    case "DISPLAY_USERS":
      return {...state, users: action.payload}
      break;
  
    default:
      return state
      break;
  }
}