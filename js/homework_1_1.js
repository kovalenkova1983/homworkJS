﻿/*Задача 1 Запитайте у користувача Місто, вік, ім'я та виведіть ці дані на сторінку згенерувавши 
теги для виводу через JavaScript Також продублюйте ці дані в консоль в форматі *Користувач* 
Ім'я : Ім'я користувача Вік : Вік користувача Місто проживання : Місто користувача *Кінець виводу* 
Задача 2 Створіть 3 змінних ( x = 6, y = 14, z = 4 ) Виконайте та відобразіть результат наступних 
операцій для цих змінних: x += y - x++ * z; z = --x - y * 5; y / = x + 5% z; z - x++ + y * 5; x = y - x++ * z;
 Дайте відповідь як джаваскрипт виконав розрахунок кожної операції.*/


let data_name = prompt("Введите ваше имя:")
let data_age = prompt("Введите ваш возраст:")
let data_city = prompt("Введите ваше место проживания:")

document.write("Ваше имя: " + data_name + "<br/>")
document.write("Ваш возраст: " + data_age + "<br/>")
document.write("Место проживания: " + data_city + "<br/>");

console.log("*Користувач*")
console.log("Ім'я : " + data_name)
console.log("Вік :" + data_age)
console.log("Місто проживання : " + data_city)
console.log("Кінець виводу")