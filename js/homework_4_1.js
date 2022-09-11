/*Задача 1 
Напиши функцию map(fn, array), которая принимает на вход функцию и массив,
 и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. */


function map(fn, array) {
    const newArray = []
    for (let i = 0; i < array.length; ++i) {
        newArray.push(fn(array[i]));
    }
    return newArray
}
function addition(x) { return x + x; }
console.log(map(addition, [1, 2, 3, 4]));//2,4,6,8
console.log(map(addition, []));//[]
