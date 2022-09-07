//let data_number = prompt("Введите ваше число:")

let data_number = prompt("Введите ваше число:");


if (data_number % 1 == 0) {

    if (data_number == null || data_number == 0) {
        alert("Вы не ввели число или ввели 0!!!")
    }
    else if (data_number <= 4) {
        document.write("Sorry, no numbers")
    }

    else {
        for (let i = 0; i <= data_number; i++) {


            if (i % 5 == 0 && i != 0) {
                document.write("<br/>");
                document.write(i);

            }



        }
        
        document.write("<br/>" + "Вы ввели число " + data_number);
    }
}
else
    document.write("Вы ввели не целое число");
