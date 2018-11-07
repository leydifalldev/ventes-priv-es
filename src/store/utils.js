export const makeActionCreator = (actionTypes, apiMethod) => (
  ...params
) => async dispatch => {
  console.log("Params LOG", params);
  dispatch({
    type: actionTypes.start,
    params,
  });
  try {
    if (!api[apiMethod]) {
      const errorMessage = `Could not find "${apiMethod}" on the API client !`;
      console.error(errorMessage);
    }
    const response = await api[apiMethod](...params);
    dispatch({
      type: actionTypes.success,
      params,
      response,
    });
    return { response, params };
  } catch (error) {
    dispatch({
      type: actionTypes.failure,
      params,
      error,
    });
    throw error;
  }
};