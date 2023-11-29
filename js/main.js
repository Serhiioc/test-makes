const modal = document.querySelector('.modal__backdrop')

const callBtn = document.querySelector('.main-banner__btn')
const closeBtn = document.querySelector('.modal__btn')

const toggleModal = () => {
  modal.classList.toggle('hidden')
}

callBtn.addEventListener('click', toggleModal)

closeBtn.addEventListener('click', toggleModal)
