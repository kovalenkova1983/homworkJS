/*    Реалізуйте програму перевірки телефону
* Використовуючи JS Створіть поле для введення телефону та кнопку збереження
* Користувач повинен ввести номер телефону у форматі 000-000-00-00
* Після того як користувач натискає кнопку зберегти перевірте правильність введення номера,
 якщо номер правильний зробіть зелене тло і використовуючи document.location переведіть користувача на сторінку 
*/
let div = document.querySelector("#readFormNumber");
div.style.width = '300px';
div.style.fontSize = '50px';

document.forms.writeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formWrite = document.forms.writeForm;


    let key = 1234;
    let valueWrite = formWrite.valueInput.value;

    if (valueWrite.length == 10 && !isNaN(valueWrite)) {
        localStorage.setItem(key, valueWrite); // сохранение значения по ключу
        formWrite.reset();
        let valueRead = localStorage.getItem(key);
        document.getElementById('readFormNumber').innerHTML =valueRead.substring(0, 3) + "-" + valueRead.substring(3, 6) + "-" + valueRead.substring(6, 8) + "-" + valueRead.substring(8);
        div.style.backgroundColor = "green";

    }

    formWrite.reset();
});
