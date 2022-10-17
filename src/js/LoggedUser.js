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
        //console.log("looking for " + username)
        if (user.username === username) {
            console.log(user)
            return user
        }
    }
    return user
}

export function LSisLogged() {
    return !!localStorage.getItem('logged')
}

export function LSSetLogged(username) {
    try {
        localStorage.setItem("logged", username)
    }
    catch (e) {
        console.log(e)
    }
}

export function LSLogOut(username) {
    let loggedUser
    try{
        loggedUser = localStorage.getItem("logged")
    } 
    catch (e) {
        console.log(e)
    }
    if (loggedUser === username) {
        localStorage.removeItem("logged")
    }
    localStorage.removeItem("logged")
}