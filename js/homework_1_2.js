﻿/*Задача 2 Створіть 3 змінних ( x = 6, y = 14, z = 4 ) Виконайте та відобразіть результат наступних 
операцій для цих змінних: x += y - x++ * z; z = --x - y * 5; y / = x + 5% z; z - x++ + y * 5; x = y - x++ * z;
 Дайте відповідь як джаваскрипт виконав розрахунок кожної операції.*/


 let x = 6;
 let y = 14;
 let z = 4;
alert (x += y - x++ * z);//Спочатку виконується інкремент, потім множення, потім +=
 x = 6;
 y = 14;
 z = 4;
alert (z = --x - y * 5);//Спочатку декремент, множення потім множення, віднімання
 x = 6;
 y = 14;
 z = 4;
alert (y /= x + 5 % z); // Спочатку /=, потім %,  потім +
 x = 6;
 y = 14;
 z = 4;
alert (z - x++ + y * 5);//Спочатку інкремент, множення, додавання, віднімання
x = 6;
y = 14;
z = 4;
alert (x = y - x++ * z);// Спочатку інкремент, множення, віднімання