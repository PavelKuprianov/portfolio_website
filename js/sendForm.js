const forms = document.querySelectorAll('form')

forms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = new FormData(form)
    const body = {}

    formData.append('form', form.classList.value)

    formData.forEach((value, field) => {
      body[field] = value
    })

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.status)
        }
      })
      .then(data => {
        if (data.form.substring(5) === 'form-test-drive') {
          alert('Данные успешно отправлены из основной формы!')
        } else {
          alert('Данные успешно отправлены из формы модального окна!')
        }
      })
      .catch(error => {
        alert('Возникли проблемы с отправкой данных. Код ошибки: ' + error.message)
      })
      .finally(() => {
        form.reset()
      })

  })
})

