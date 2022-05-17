const INITIAL_STATE = [];

function addLI(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.value];
    default:
      return state;
  }
}

export default addLI;
