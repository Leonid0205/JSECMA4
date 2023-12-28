// Task 1

// Необходимо получить список всех пользователей с помощью бесплатного
// API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице.
// Пользователь должен иметь возможность удалить любого пользователя из списка.

const url1 = 'https://jsonplaceholder.typicode.com/users';
async function getAllUsers(url) {
    const users = await fetch(url);
    const dataUsers = await users.json();
    const userEl = document.createElement('div');
    userEl.classList.add('users-box')
    document.querySelector('body').appendChild(userEl);
    dataUsers.forEach(element => {
        userEl.insertAdjacentHTML('beforeend',
            `
        <div class="user-box">
        <img class="cross" src="Vector.svg" alt="cross">
        <div class="user__id">ID: ${element.id}</div>
        <div class="user__name">Name: ${element.name}</div>
        <div class="user__username">Username: ${element.username}</div>
        <div class="user__email">Email: ${element.email}</div>
        <div class="user__address">
            <div  class="user__address__street">Street: ${element.address.street}</div>
            <div  class="user__address__suite">Suite: ${element.address.suite}</div>
            <div  class="user__address__city">City: ${element.address.city}</div>
            <div  class="user__address__zipcode">Zipcode: ${element.address.zipcode}</div>
            <div  class="user__address__geo">
                <div  class="user__address__geo__lat">Geo lat: ${element.address.geo.lat}</div>
                <div  class="user__address__geo__lng">Geo lng: ${element.address.geo.lng}</div>
            </div>
        </div>
        <div class="user__phone">Phone: ${element.phone}</div>
        <div class="user__website">Website: ${element.website}</div>
        <div class="user__company">
            <div class="user__company__name">Company name: ${element.company.name}</div>
            <div class="user__company__catchPhrase">Company catchPhrase: ${element.company.catchPhrase}</div>
            <div class="user__company__bs">Company bs: ${element.company.bs}</div>
        </div>
        </div>
        `)
        const crossEl = document.querySelectorAll('img');
        crossEl.forEach(element => {
            element.addEventListener('click', function (e) {
                const deleteEl = element.closest('.user-box')
                deleteEl.remove();
            });
        });
        console.log(element);
        document.querySelector('body').appendChild(userEl);
    });
    return await dataUsers;
}
getAllUsers(url1);

//Task 2

// Необходимо реализовать отрисовку 10 картинок собак из
// API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

const url2 = 'https://dog.ceo/api/breeds/image/random/10';
const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms));
}
async function getDogs(url) {
    const dogs = await fetch(url);
    dataDogs = await dogs.json();
    dataDogs.message.forEach(async element => {
        await delay(3000);
        console.log(element);
    });
    return dataDogs;
}
getDogs(url2);