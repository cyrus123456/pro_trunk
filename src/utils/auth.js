import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const TokenOaAutoKey = 'oaAuto-Token'
const UserNameKey = 'Admin-UserName'

/* export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
} */

export function getToken (key) {
  // return localStorage.getItem(TokenKey)
  return JSON.parse(sessionStorage.getItem(key))
}

export function setToken (key, token) {
  // return localStorage.setItem(TokenKey, token)
  return sessionStorage.setItem(key, JSON.stringify(token))
}

export function removeToken () {
  return localStorage.removeItem(TokenKey)
}

export function getUserName () {
  return localStorage.getItem(UserNameKey)
}

export function setUserName (name) {
  return localStorage.setItem(UserNameKey, name)
}

export function removeUserName () {
  return localStorage.removeItem(UserNameKey)
}
