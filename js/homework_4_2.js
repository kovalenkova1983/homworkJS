/*Задача 2
Перепишите функцию, используя оператор '?' или '||'
Следующая функция возвращает true, если параметр age больше 18. В ином случае она задаёт вопрос confirm и возвращает его результат.
1 function checkAge(age) {
2 if (age > 18) {
3 return true;
4 } else {
5 return confirm('Родители разрешили?');
6 } } */

function button1() {
  document.getElementById("monitor").innerHTML = "function checkAge(age) {<br/>return (age > 18) ? true : confirm('Родители разрешили?');<br\n>}";

  function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
  }
}

function button2() {
  document.getElementById("monitor").innerHTML = "function checkAge(age) {<br/>return (age > 18) || confirm('Родители разрешили?');<br\n>}";
  function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
  }
}

function button3() {
  const ageDate = prompt("Введите ваш возраст: ");
checkAge(ageDate);
  

function checkAge(age) {
    return (ageDate > 18) ? alert("Можем не спрашивать предков!!") : qestAge();

    
    
    function qestAge() {
      let qest = confirm('Родители разрешили?');
      if (qest) { alert("Родители разрешили!!!"); }
      else { alert("Родители запретили!!!"); }
    }


  }

}