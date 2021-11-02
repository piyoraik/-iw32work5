const getData = async () => {
  const id = document.getElementById('id').value
  const fetchData = await axios
    .get(`/users/${id}`, {})
    .then((result) => {
      return result.data
    })
    .catch((err) => {
      return err.data
    })
  let res
  switch (fetchData.response) {
    case 200:
      res = `${fetchData.rows[0].id}  ${fetchData.rows[0].email} ${fetchData.rows[0].username} ${fetchData.rows[0].password}`
      break
    case 400:
      res = 'Error!!'
    default:
      res = 'Error!'
  }
  $('#output').append(`GET: ${res}<br />`)
}

const postData = async () => {
  const params = {
    id: document.getElementById('id').value,
    email: document.getElementById('email').value,
    username: document.getElementById('username').value,
    password: document.getElementById('password').value,
  }
  const fetchData = await axios
    .post('/users', { params })
    .then((result) => {
      console.log(result)
      return result.data.message
    })
    .catch((err) => {
      return err.data.message
    })
  $('#output').append(`POST: ${fetchData}<br />`)
}

const putData = async () => {
  const id = document.getElementById('id').value
  const params = {
    email: document.getElementById('email').value,
    username: document.getElementById('username').value,
    password: document.getElementById('password').value,
  }
  const fetchData = await axios
    .put(`/users/${id}`, { params })
    .then((result) => {
      return result.data.message
    })
    .catch((err) => {
      const message = err.data ? err.data.message : 'Error!'
      return message
    })
  $('#output').append(`PUT: ${fetchData}<br />`)
}

const deleteData = async () => {
  const id = document.getElementById('id').value
  const fetchData = await axios
    .delete(`/users/${id}`)
    .then((result) => {
      console.log(result)
      return result.data.message
    })
    .catch((err) => {
      const message = err.data ? err.data.message : 'Error!'
      return message
    })
  $('#output').append(`DELETE: ${fetchData}<br />`)
}
