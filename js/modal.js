const modalButton = document.querySelectorAll('.more')
const modal = document.querySelector('.modal')
const overlay = modal.querySelector('.overlay')
const closeButton = modal.querySelector('.modal__close')

modalButton.forEach((link) => {
    link.addEventListener('click', () => {
    modal.classList.toggle('hidden')
  })
})


overlay.addEventListener('click', () => {
  modal.classList.toggle('hidden')
})

closeButton.addEventListener('click', () => {
  modal.classList.toggle('hidden')
})