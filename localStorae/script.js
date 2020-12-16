window.onload = function () {
    const localStorageContainer =
        document.getElementById('localStorageContainer');
    const localStorage = window.localStorage;

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        localStorageContainer.innerHTML +=
            '<tr>' + 
            `<td>${key}</td><td>${value}</td>` +
            '<td>' +
            '<a href="javascript:void(0)" ' +
            `onClick="remove('${key}')">remove</a>` +
            '</td>' +
            '<tr>'
    }
}

function remove(key) {
    localStorage.removeItem(key);
    location.reload();
}

function addToLocalStorage() {
    const inputs = document.querySelectorAll('input');
    const key = inputs[0].value;
    const value = inputs[1].value;
    localStorage.setItem(key, value);
    location.reload();
}