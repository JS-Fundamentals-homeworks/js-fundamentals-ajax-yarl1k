// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js
async function getUserInfo() {
    const name_input = document.getElementById("userNameInput");
    const user_button = document.getElementById("getUserButton");
    const city_info = document.getElementById("userCity");

    user_button.addEventListener('click', async function (e) {
        const name = name_input.value.trim();
        if (name === "" || name === null || typeof name === 'number') {
            city_info.innerText = 'Введіть ім’я користувача';
            return;
        } 

    try {
        const url = 'https://jsonplaceholder.typicode.com/users'
        const response = await fetch(url);
        const users = await response.json();

        const needed_user = users.find(
            user => user.name.toLowerCase() === name.toLowerCase()
        );
        if (needed_user) {
            city_info.innerText = needed_user.address.city;
        }
        else {
            city_info.innerText = 'Користувача, нажаль, не знайдено';
        }
        
    }
    catch (e) {
        console.log('Error');
    }
})
}
getUserInfo();