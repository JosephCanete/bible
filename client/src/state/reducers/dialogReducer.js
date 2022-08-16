const reducer = (state = false, action) => {
  switch (action.type) {
    case "SELECTED":
      return true;
    case "UNSELECTED":
      return false;
    default:
      return state;
  }
};

export default reducer;
