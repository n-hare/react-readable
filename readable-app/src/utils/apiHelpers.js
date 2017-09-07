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

export const postData = (path, data) => (
  fetch(`${baseURL}${path}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'redux0910'
      },
      method: 'POST',
      body: data
    })
)

export const deleteData = (path) => (
  fetch(`${baseURL}${path}`, {
    method: 'DELETE',
    headers
  })
)




