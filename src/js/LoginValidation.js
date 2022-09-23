export function validateLoginInfo(username, password) {
    try {
        var users = JSON.parse(localStorage.getItem("users"))
    }
    catch (e) {
        throw "Exception during trying to parse " + username + ": " + e
    }
    if (users === null) {
        throw "Unknown username"
    }
    for (let i = 0; i < users.length; i++) {
        let user = users.at(i)
        if (user.username === username && password === user.password) {
            return
        }
    }
    throw "Wrong password"
}