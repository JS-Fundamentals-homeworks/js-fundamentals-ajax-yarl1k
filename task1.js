// Завдання: отримання даних про користувачів
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js 
async function loadNames() {
    const list = document.getElementsByClassName('usersList');
    const url = 'https://jsonplaceholder.typicode.com/users';

    const response = await fetch(url);
    const users = await response.json();

users.forEach(user => {
    const new_li = document.createElement("li");
    new_li.textContent = user.name;
    list[0].appendChild(new_li);
});
}
loadNames();
