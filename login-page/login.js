const users = [
    { username: 'deepi@hotmail.com', password: '@#$_&-+()/' },
    { username: 'deepi2@hotmail.com', password: 'vw123vw321'}
];

const loginButton = document.getElementById('loginButton');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginMessage = document.getElementById('loginMessage');

loginButton.addEventListener('click', function() {
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    const user = users.find(user => user.username === enteredUsername && user.password === enteredPassword);

    if (user) {
        loginMessage.textContent = 'Bem Vindo de volta!',location.replace('logado.html');
    } else {
        loginMessage.textContent = 'Usuário ou senha incorretos. Tente novamente.';
    }
});
