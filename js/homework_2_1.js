/*Задача 1 
Використовуючи пробіли &nbsp; та зірочки * намалюйте використовуючи цикли
Трикутник
Ромб
Порожній прямокутник */

///триугольник
let gorizontLine = 10;
let verticalLine = 20;
var n = "&nbsp";
for (let i = 0; i < 8; i++) {
    for (let k = 8; k > i - 1; k--) {
        document.write(n, n)
    }
    for (let j = 0; j < i + 1; j++) {
        document.write("*", n, n)
    }
    document.write("<br>")
}


document.write("<br>______________________________________________________<br><br>");

//Ромб

for (let i = 0; i < 8; i++) {
    for (let k = 8; k > i - 1; k--) {
        document.write(n, n)
    }
    for (let j = 0; j < i + 1; j++) {
        document.write("*", n, n)
    }
    document.write("<br>")
}

for (let i = 8; i + 1 > 0; i--) {
    for (let k = 8; k > i - 1; k--) {
        document.write(n, n)
    }
    for (let j = 0; j < i + 1; j++) {
        document.write("*", n, n)
    }
    document.write("<br>")
}

document.write("<br>______________________________________________________<br><br>");


///Пустой квадрат

for (let i = 0; i <= gorizontLine; i++) {

    for (let j = 0; j <= verticalLine; j++) {
        if (i === 0 || i === gorizontLine) {
            document.write("*");
        }
        else {
            if (j == 0 || j == verticalLine) {
                document.write("*");
            }
            else {
                document.write(n + n);
            }

        }

    }
    document.write("<br>");

}