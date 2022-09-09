/*1.
Напишіть функцію isEmpty(obj), яка повертає true, якщо об'єкт не має властивостей, інакше false. */

function isEmpty(obj)
 {
    for (let a in obj) // переборка свойств
    {
            return false; // сработает если будет переберать свойства
    }
    return true;
  }