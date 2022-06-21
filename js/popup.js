let popup = document.querySelector(".popup")
let openPopupButton = document.querySelector(".feedback")
let closePopupButton = document.querySelector(".popup__close")
let popupForm = document.querySelector(".popup__form")
let popupSubtitle = document.querySelector(".popup__subtitle")
openPopupButton.addEventListener('click', (e) => {
    e.preventDefault()
    popup.classList.add('popup--active')
})
closePopupButton.addEventListener('click', () => {
    popup.classList.remove('popup--active')
    popupForm.classList.remove('popup__form--submited')
    popupSubtitle.classList.remove('popup__subtitle--submited')
})
function submitPopupForm(e) {
    e.preventDefault()
    popupForm.classList.add('popup__form--submited')
    popupSubtitle.classList.add('popup__subtitle--submited')
}
popupForm.addEventListener('submit', submitPopupForm)
