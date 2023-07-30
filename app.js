
window.addEventListener('load', () => {
    const user = {name: 'John', age: 30, email: 'john@doe.com'};
    window.localStorage.setItem('user', JSON.stringify(user));
    const userFromStorage = JSON.parse(window.localStorage.getItem('user'));
    console.log(userFromStorage.name);
});

