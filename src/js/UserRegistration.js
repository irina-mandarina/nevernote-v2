export function isValidUsername(username) {
    if (username.includes(" ")) {
        return false;
    }
    return true;
}

export function isTaken(username) {
    for(let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key.includes("users")) {
            let users
            try {
                users = JSON.parse(localStorage.getItem(key))
            }
            catch (e) {
                console.log(e)
            }
            for (let i = 0; i < users.length; i++) {
                if (users[i].username === username) {
                    return true
                }
            }
        }
        if (i === localStorage.length) {
            return false
        }
    }
    return false
}

export function isValidPassword(password) {
    if (/\d/.test(password)) {
        if (password.length >= 4) {
            return true
        }
    }
    return false
}

export function saveUserInfo(name, age, address, username, password) {
    let users
    try {
        users = JSON.parse(localStorage.getItem('users'))
    }
    catch (e) {
        console.log(e)
    }
    if(users == null) users = []
    users.push({name: name, age: age, address: address, username: username, password: password})
    localStorage.setItem('users', JSON.stringify(users))
}


