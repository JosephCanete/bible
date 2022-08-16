export const SELECTED = (payload) => {
  return (dispatch) => {
    dispatch({
      type: "SELECTED",
      payload: payload,
    });
  };
};

export const UNSELECTED = (payload) => {
  return (dispatch) => {
    dispatch({
      type: "UNSELECTED",
      payload: payload,
    });
  };
};
