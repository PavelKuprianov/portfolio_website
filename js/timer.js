const timerBlock = document.querySelector('.timer__time')
const deadline = '31 march 2022'

let interval 

const updateClock = () => {
  const date = new Date().getTime()
  const dateDeadline = new Date(deadline).getTime()
  const timeRemaning = (dateDeadline - date) / 1000
  
  const day = Math.floor((timeRemaning / 60 / 60)/24)
  const hours = Math.floor((timeRemaning / 60 / 60)%24)
  const minutes = Math.floor((timeRemaning / 60)%60)
  const seconds = Math.floor(timeRemaning%60)

  const formatHors = hours < 10 ? '0' + hours : hours
  const formatMinutes = minutes < 10 ? '0' + minutes : minutes
  const formatSeconds = seconds < 10 ? '0' + seconds : seconds
  
  timerBlock.textContent =`Осталось дней: ${day}. Часов: ${formatHors}:${formatMinutes}:${formatSeconds}`
  
  if (timeRemaning <= 0) {
    clearInterval(interval)
    timerBlock.textContent =`00:00:00`

  }
}

updateClock()

interval = setInterval(updateClock, 500)

//----------------------------







