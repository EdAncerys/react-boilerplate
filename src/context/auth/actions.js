export const loading = async ({ dispatch, isLoading }) => {
  try {
    console.log('isLoading triggered'); //debug
    setLoadingAction(dispatch, true);
    //0. set filtered posts
  } catch (err) {
    console.log('err', JSON.stringify(err)); //debug
  }
};

// SET CONTEXT ---------------------------------------------------------
export const setLoadingAction = async (dispatch, isLoading) => {
  console.log('setLoadingAction triggered'); //debug
  dispatch({ type: 'SET_LOADING', payload: isLoading });
};
