// API HELPERS

const baseURL = 'http://localhost:5001'
const headers = new Headers({
  'Accept': 'application/json',
  'Authorization': 'redux0910'
})

export const getData = (path = '/posts') => (
    fetch(`${baseURL}${path}`, { headers })
    .then((res) => res.json())
)

