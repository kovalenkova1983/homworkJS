/*    Створіть програму секундомір.
* Секундомір матиме 3 кнопки "Старт, Стоп, Скидання"
* При натисканні на кнопку стоп фон секундоміра має бути червоним, старт - зелений, скидання - сірий * Виведення лічильників у форматі ЧЧ:ММ:СС
*/

let div = document.querySelector("#timer");
div.style.width = '180px'
div.style.height = '60px'
div.style.fontSize = '50px'
min = 0;
hour = 0;

function init() {
    sec = 0;
    timerId = setInterval(tick, 1000);
}

function tick() {
    sec++;
    if (sec >= 60) {
        min++;
        sec = sec - 60;
    }
    if (min >= 60) {
        hour++;
        min = min - 60;
    }
    if (sec < 10) {
        if (min < 10) {
            if (hour < 10) {
                document.getElementById('timer').innerHTML = '0' + hour + ':0' + min + ':0' + sec;
            } else {
                document.getElementById('timer').innerHTML = hour + ':0' + min + ':0' + sec;
            }
        } else {
            if (hour < 10) {
                document.getElementById('timer').innerHTML = '0' + hour + ':' + min + ':0' + sec;
            } else {
                document.getElementById('timer').innerHTML = hour + ':' + min + ':0' + sec;
            }
        }
    } else {
        if (min < 10) {
            if (hour < 10) {
                document.getElementById('timer').innerHTML = '0' + hour + ':0' + min + ':' + sec;
            } else {
                document.getElementById('timer').innerHTML = hour + ':0' + min + ':' + sec;
            }
        } else {
            if (hour < 10) {
                document.getElementById('timer').innerHTML = '0' + hour + ':' + min + ':' + sec;
            } else {
                document.getElementById('timer').innerHTML = hour + ':' + min + ':' + sec;
            }
        }
    }
}








document.querySelector("#startBtn").addEventListener("click", function () {

    div.style.backgroundColor = "green";
    init();
});

document.querySelector("#stopBtn").addEventListener("click", function () {

    clearInterval(timerId);
    timerId = null;

    div.style.backgroundColor = "red";
});

document.querySelector("#resetBtn").addEventListener("click", function () {

    clearInterval(timerId);
    timerId = null;
    document.getElementById('timer').innerHTML = '00' + ':00' + ':00';
    div.style.backgroundColor = "grey";
});