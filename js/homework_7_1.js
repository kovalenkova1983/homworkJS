/*    При загрузке страницы - показать на ней кнопку с текстом "Нарисовать круг". 
Данная кнопка должна являться единственным контентом в теле HTML документа, весь остальной контент 
должен быть создан и добавлен на страницу с помощью Javascript
    При нажатии на кнопку "Нарисовать круг" показывать одно поле ввода - диаметр круга. 
    При нажатии на кнопку "Нарисовать" создать на странице 100 кругов (10*10) случайного цвета. 
    При клике на конкретный круг - этот круг должен исчезать, при этом пустое место заполняться, 
    то есть все остальные круги сдвигаются влево.*/



let btn = document.querySelector("#btn1");
let btnCircles = document.querySelector("#btn2");
let div = document.querySelector("#monitor");



btn.onclick = function () {
    let sizeCircle = prompt("Введите дивметр круга:")
    div.style.borderRadius = "50%";
    div.style.backgroundColor = "orange";
    div.style.width = `${sizeCircle}px`;
    div.style.height = `${sizeCircle}px`;

}

btnCircles.onclick = function () {



    for (let i = 0; i < 10; i++) {
        let createDiv = document.createElement("div")
        for (let j = 0; j < 10; j++) {

            let createCircles = document.createElement("container")
            let copyCircles = createCircles.cloneNode(true);
            copyCircles.style.borderRadius = "50%";
            copyCircles.style.padding = "30px";

            copyCircles.style.backgroundColor = "orange";
            //copyCircles.style.width = "100px";
            // copyCircles.style.height = "100px";
            copyCircles.style.cssFloat = "left";
            copyCircles.style.csswhiteSpace = "nowrap";

            // copyCircles.style.whiteSpace;
            document.body.append(copyCircles);
        }

        createDiv.style.height = "60px";
        document.body.append(createDiv);
    }
}