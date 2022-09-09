/*Разработайте функцию-конструктор, которая будет создавать объект Human(человек)
 создайте массив объектов и реализуйте функцию, которая будет сортировать элементы 
 массива по значению свойства Age по возрастанию или по убыванию.  */



function People(name, age) {
        this.name = name;
        this.age = age;
}

var people = new People();
var peoples = [];
peoples.push(new People('Vasa', 19));
peoples.push(new People('Peta', 20));
peoples.push(new People('Anna', 24));
peoples.push(new People('Towrik', 26));
peoples.push(new People('Rey', 18));



function buttonup() {
        peoples.sort(function (a, b) {
                return a.age - b.age
        });

        for (var i = 0; i < peoples.length; i++) {
                document.write(peoples[i].name + " | " + " | " + peoples[i].age + "<br />");
        };
}

function buttondown() {
        peoples.sort(function (a, b) {
                return b.age - a.age
        });

        for (var i = 0; i < peoples.length; i++) {
                document.write(peoples[i].name + " | " + " | " + peoples[i].age + "<br />");
        };
}