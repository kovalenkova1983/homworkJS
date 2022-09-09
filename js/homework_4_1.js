/*Задача 1 
Напиши функцию map(fn, array), которая принимает на вход функцию и массив,
 и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. */

 
function map(fn, array) 
{
    const newArray = []
    for (let i = 0; i < array.length; ++i)
     {
        newArray.push(fn(array[i]));
    }
        return newArray
 }