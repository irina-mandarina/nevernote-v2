
var userObj = null
function getUserInfo(username) {
    if (userObj !== null) {
        return userObj
    }

    let users
    try {
        users = JSON.parse(localStorage.getItem('users'))
    }
    catch (e) {
        console.log(e)
    }
    if (users === null) {
        users = []
        throw "Problem while looking for username: " + username + ": users is null"
    }

    for (let i = 0; i < users.length; i++) {
        let user = users.at(i)
        if (user.username === username) {
           userObj = user
        return userObj
        }
    }
    throw "Problem while looking for username: " + username
}

export function getName(username) {
    getUserInfo(username)
    return userObj.name
}

export function getAge(username) {
    getUserInfo(username)
    return userObj.age
}

export function getAddress(username) {
    getUserInfo(username)
    return userObj.address
}

export function getPassword(username) {
    getUserInfo(username)
    return userObj.password
}