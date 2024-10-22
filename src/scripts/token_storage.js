const usersKey = 'users';

function setStorageItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getStorageItem(key) {
    const data = localStorage.getItem(key);

    return JSON.parse(data);
}

function setToken(token) {
    setStorageItem('token', token);
}

function getToken() {
    return getStorageItem('token') || '';
}
