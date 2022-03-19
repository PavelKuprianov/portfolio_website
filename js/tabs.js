const tabButtons = document.querySelectorAll('.design-list__item');
const tabDescriptions = document.querySelectorAll('.design__descr');
const tabImages = document.querySelectorAll('.design-images');
const tabImagesLeft = document.querySelectorAll('.design-block__img');
const titleTabs = document.querySelectorAll('.design__title');
const title = document.querySelector('title');

const changeContent = (array, value) => {
  array.forEach((elem) => {
    if(elem.dataset.tabsField !== value) {
      elem.classList.add('hidden')
    }else {
      elem.classList.remove('hidden')

      if (value === 'interior') {
        title.textContent = "Примеры сайтов"
      } else {
        title.textContent = "Примеры приложений"
      }
    }
  })
} 

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener('click', (event) => {
    const dataValue = tabButton.dataset.tabsHandler

    console.log(dataValue)

    changeContent(tabDescriptions, dataValue)
    changeContent(tabImages, dataValue)
    changeContent(tabImagesLeft, dataValue)
    changeContent(titleTabs, dataValue)

    tabButtons.forEach((btn) => {
      if (btn === event.target) {
        btn.classList.add('design-list__item_active')
      } else {
        btn.classList.remove('design-list__item_active')
      }
    })
    
  })
})