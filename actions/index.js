export function fetchCards (page) {
  return dispatch => {
    const req = fetch(`https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF&page=${page}`)
    dispatch(fetchPostsStart())
    return req
            .then(
              response => response.json()
            )
            .then(
              data => dispatch(fetchPostsSuccess(data))
            )
            .catch(
              err => alert('Check that you started yarn json server!', 'start the yarn json server!', 'error')
            );
  }
}

function fetchPostsSuccess(data) {
  return {
    type: 'FETCH_SUCCESS',
    photos: data.photos,
  }
}
function fetchPostsStart() {
  return {
    type: 'FETCH_START',
  }
}