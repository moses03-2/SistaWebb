setInterval(setClock, 1000)

const timVisare = document.querySelector('[data-tim-visare]')
const minutVisare = document.querySelector('[data-minut-visare]')
const sekundVisare = document.querySelector('[data-sekund-visare]')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(sekundVisare, secondsRatio)
    setRotation(minutVisare, minutesRatio)
    setRotation(timVisare, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()