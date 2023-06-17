export const updateLocalStorage = (type, state) => {
  window.localStorage.setItem(type, JSON.stringify(state))
}

export const getRandomNumber = () => {
  return Math.floor(Math.random() * 9000) + 1000;
}
