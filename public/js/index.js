const getData = async () => {
  const inputValue = document.getElementById('textvalue').value
  const params = {
    name: inputValue,
  }
  const fetchData = await axios
    .get('/users', { params })
    .then((result) => {
      return result.data.name
    })
    .catch((err) => {
      console.log(err)
    })
  $('#output').append(`GET: ${fetchData}<br />`)
}

const postData = async () => {
  const inputValue = document.getElementById('textvalue').value
  const params = {
    name: inputValue,
  }
  const fetchData = await axios
    .post('/users', { params })
    .then((result) => {
      console.log(result)
      return result.data.name
    })
    .catch((err) => {
      console.log(err)
    })
  $('#output').append(`POST: ${fetchData}<br />`)
}

const putData = async () => {
  const inputValue = document.getElementById('textvalue').value
  const params = {
    name: inputValue,
  }
  const fetchData = await axios
    .put('/users', { params })
    .then((result) => {
      return result.data.name
    })
    .catch((err) => {
      console.log(err)
    })
  $('#output').append(`PUT: ${fetchData}<br />`)
}

const deleteData = async () => {
  const inputValue = document.getElementById('textvalue').value
  const params = {
    name: inputValue,
  }
  const fetchData = await axios
    .delete('/users', { params })
    .then((result) => {
      return result.data.name
    })
    .catch((err) => {
      console.log(err)
    })
  $('#output').append(`DELETE: ${fetchData}<br />`)
}

const showAlert = () => {
  alert('JavaScriptを実行')
}
let values = {
  name: $('#textvalue').val(),
}
