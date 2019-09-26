const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

// Запрашивает "log in"
const userLogin = prompt("Log in!");
// Логин верный-запршивает пароль
if(userLogin === adminLogin) {
    userPassword = prompt("Password!"); 
}
// Отмена логина
if( userLogin === null){
    alert ("Отменено пользователем!");
}
// Логин неверный
else if( userLogin !==adminLogin){
    alert("Доступ запрещен, неверный логин!");
}
// Пороль верный
if( userPassword === adminPassword) {
    alert ("Добро пожаловать!");
} 
// Отмена ввода пароля
else if (userPassword === null) {
    alert ("Отменено пользователем!");
}
// Пароль неверный
else if (userPassword !==adminPassword){
    alert ("Доступ запрещен, неверный пароль!");
}

