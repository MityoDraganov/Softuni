export function getUserData() {
    const data = JSON.parse(sessionStorage.getItem('userData'))
    return data
}

export function setUserData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data))
}

export function clearUserData() {
    sessionStorage.removeItem('userData')
}


/*
    Util funcs for Authorization
    
    **getUserData**
    get from storage

    **setUserData**
    set userData in storage

    **clearUserData**
    remove specifig thinkg from storage
*/