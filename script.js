const birthday = new Date('November 29, 2020')

const today = new Date()

const remainingTime = birthday - today

const secondsRemaining = Math.floor((remainingTime / 1000) % 60)
const minutesRemaining = Math.floor((remainingTime / 1000 / 60) % 60)
const hoursRemaining = Math.floor((remainingTime / (1000 * 60 * 60) % 24))
const daysRemaining = Math.floor((remainingTime / (1000 * 60 * 60 * 24)))