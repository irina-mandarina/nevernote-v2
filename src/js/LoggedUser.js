import { isTaken } from "./UserRegistration"

export function loggedUser() {
    let username = localStorage.getItem("logged")
    let users, user = null
    try {
        users = JSON.parse(localStorage.getItem("users"))
    }
    catch (e) {
        toastr["error"]("LoggedUser.js: Exception during trying to parse USERS: " + e)
    }
    if (users === null) {
        toastr["error"]("LoggedUser.js: Exception during trying to parse USERS: users is null")
    }
    for (let i = 0; i < users.length; i++) {
        user = users.at(i)
        console.log("looking for " + username)
        if (user.username === username) {
            console.log(user)
            return user
        }
    }
    return user
}

export function logged() {
    return /* localStorage.getItem("logged") !== null ||  */ !!localStorage.getItem('logged') && isTaken(localStorage.getItem("logged"))
}

export function logUser(username) {
    if (isTaken(username)) {
        localStorage.setItem("logged", username)
    } else {
        toastr["error"]("LoggedUser.js: You're trying to log someone who isn't registered (" + username + ")")
    }
}

export function logOut(username) {
    if (localStorage.getItem("logged") === username) {
        localStorage.removeItem("logged")
    }
    else {
        toastr["error"]("LoggedUser.js: " + username + " isn't logged in to begin with")
    }
    localStorage.removeItem("logged")
}