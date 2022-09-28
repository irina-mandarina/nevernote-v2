export function validateLoginInfo(username, password) {
    try {
        var users = JSON.parse(localStorage.getItem("users"))
    }
    catch (e) {
        toastr["error"]("Exception during trying to parse USERS: " + e)
        return false
    }
    if (users === null) {
        return false
    }
    for (let i = 0; i < users.length; i++) {
        let user = users.at(i)
        if (user.username === username && password === user.password) {
            return true
        }
    }
    toastr["error"]("Wrong password")
    return false
}