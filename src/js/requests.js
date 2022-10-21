export async function getNotes(username) {
    const notes = await fetch ('http://localhost:5173/notes', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'username': username
        }
    })
        .then((response) => response.json())
        .then((response) => JSON.parse(JSON.stringify(response.getNotes)))
        .catch((error) => {
            console.log(error)
        })
    if (notes != null && notes != undefined) {
        return notes
    }
    else return []
}

export function addNote(username, title, content) {
    let requestBody = {
        "title": title,
        "content": content
    }
    fetch ('http://localhost:5173/notes', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            'Content-Type': 'application/json',
            'username': username
        }
    })
        .then((response) => response.text())
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.log(error)
        })
}

export function deleteNote(id, username) {
    fetch ('http://localhost:5173/notes/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'username': username
        }
    })
        .then((response) => response.text())
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.log(error)
        })
}

export function editNote(id, username, title, content) {
    let requestBody = {
        "title": title,
        "content": content
    }
    fetch ('http://localhost:5173/notes/' + id, {
        method: 'PUT',
        body: JSON.stringify(requestBody),
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json, text/plain, */*",
            "username": username
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.log(error)
        })
}

export function register(username, password, name, address, age) {
    let requestBody = {
        "username": username,
        "password": password,
        "name": name,
        "age": age,
        "address": address
    }
    fetch ('http://localhost:5173/auth/register', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json, */*"
        }
    })
        .catch((error) => {
            console.log(error)
        })
}

export async function logIn(username, password) {
    let requestBody = {
        "username": username,
        "password": password
    }
    let response = await fetch ('http://localhost:5173/auth/login', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json, */*"
        }
    })
        // .then ((response) => {
        //     if (response.status === 200) {
        //         response = true
        //     }
        //     else {
        //         response = false
        //         console.log(response)
        //     }
        // })
        // .catch((error) => {
        //     console.log(error)
        // })
    return response.status === 200
}

export function logOut(username) {
    fetch ('http://localhost:5173/auth/logout', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json, */*",
            "username": username
        }
    })
        .catch((error) => {
            console.log(error)
        })
}

export async function userDetails(username) {
    const details = await fetch ('http://localhost:5173/profile/details', {
        method: 'GET',
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json, */*",
            "username": username
        }
    })
        .then((response) => response.json())
        .then((response) => JSON.parse(JSON.stringify(response)))
        .catch((error) => {
            console.log(error)
        })
    return details
} 