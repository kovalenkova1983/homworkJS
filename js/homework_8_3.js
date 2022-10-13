/* Слайдер
Створіть слайдер кожні 3 сек змінюватиме зображення
Зображення для відображення
https://new-science.ru/wp-content/uploads/2020/03/4848-4.jpg
https://universetoday.ru/wp-content/uploads/2018/10/Mercury.jpg
https://naukatv.ru/upload/files/shutterstock_418733752.jpg
https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2018-12/20180913_zaa_p138_057.jpg
https://nnst1.gismeteo.ru/images/2020/07/shutterstock_1450308851-640x360.jpg
*/
let div = document.querySelector("#test");
div.style.width = '600px';
div.style.height = '600px';


const sliders = [];
sliders[0] = "https://klike.net/uploads/posts/2021-12/1638345206_1.jpg";
sliders[1] = "https://klike.net/uploads/posts/2021-12/1638345229_2.jpg";
sliders[2] = "https://klike.net/uploads/posts/2021-12/1638345177_5.jpg";
sliders[3] = "https://klike.net/uploads/posts/2021-12/1638345162_6.jpg";
sliders[4] = "https://klike.net/uploads/posts/2021-12/1638345243_24.jpg";


function init() {
    sec = 0;
    timerId = setInterval(tick, 3000);
}

function tick() {
    sec++;
    if (sec >= 5) {
        
        sec = 0;
    }
    document.getElementById("test").style.backgroundImage = `url(${sliders[sec]})`;
}









document.querySelector("#startBtn").addEventListener("click", function () {

    init();
    

});