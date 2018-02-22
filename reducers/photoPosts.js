const initialState = {
  isFetching: false,
  page: 1,
  photos: [],
}

function photoPosts(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isFetching: false,
        photos: state.photos.concat(action.photos),
      };
    case 'FETCH_START':
      return {
        ...state,
        page: state.page + 1,
        isFetching: true,
      };
  
    default:
      return state;
  }
}

export default photoPosts;