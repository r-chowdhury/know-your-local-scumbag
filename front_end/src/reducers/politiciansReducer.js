let defaultState = {
  politicians: []
}

export function politiciansReducer(state = defaultState, action) {
  switch (action.type) {
    case "DISPLAY_POLITICIANS":
      return { ...state, politicians: action.payload }
      break;

    default:
      return state
      break;
  }
}