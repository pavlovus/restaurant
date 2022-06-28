let popup = document.querySelector(".popup")
let openPopupButton = document.querySelector(".nav__link--feedback")
let closePopupButton = document.querySelector(".popup__close")
let popupForm = document.querySelector(".popup__form")
let popupSubtitle = document.querySelector(".popup__subtitle")
let popupContent = document.querySelector(".popup__content")
openPopupButton.addEventListener('click', (e) => {
    e.preventDefault()
    popup.classList.add('popup--active')
    popupContent.classList.add('popup__content--active')
})
closePopupButton.addEventListener('click', () => {
    popup.classList.remove('popup--active')
    popupForm.classList.remove('popup__form--submited')
    popupSubtitle.classList.remove('popup__subtitle--submited')
    popupContent.classList.remove('popup__content--active')
})
function submitPopupForm(e) {
    e.preventDefault()
    popupForm.classList.add('popup__form--submited')
    popupSubtitle.classList.add('popup__subtitle--submited')
}
popupForm.addEventListener('submit', submitPopupForm)


let popupSmall = document.querySelector(".popup--reserv")
let popupContentSmall = document.querySelector(".popup__content--small")
let openPopupSmallButton = document.querySelector(".preview__button")
let closePopupSmallButton = document.querySelector(".popup__close--small")
openPopupSmallButton.addEventListener('click', (e) => {
    e.preventDefault()
    popupSmall.classList.add('popup--active')
    popupContentSmall.classList.add('popup__content--active')
})
closePopupSmallButton.addEventListener('click', () => {
    popupSmall.classList.remove('popup--active')
    popupContentSmall.classList.remove('popup__content--active')
})