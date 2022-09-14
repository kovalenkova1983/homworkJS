/*Створити клас Car , Engine та Driver.
Клас Driver містить поля - ПІБ, стаж водіння.
Клас Engine містить поля – потужність, виробник.
Клас Car містить поля – марка автомобіля, клас автомобіля,
вага, водій типу Driver, мотор типу Engine. Методи start(),
stop(), turnRight(), turnLeft(), які виводять на друк: "Поїхали",
"Зупиняємося", "Поворот праворуч" або "Поворот ліворуч".
А також метод toString(), який виводить повну інформацію про автомобіль,
її водія і двигуна.*/


class Driver {
    constructor(firstname, lastname, middlename, agedriver) {

        this.firstName = firstname;
        this.lastName = lastname;
        this.middleName = middlename;
        this.ageDriver = agedriver;
    }
}

class Engine extends Driver {
    constructor(firstname, lastname, middlename, agedriver, power, manufacturer) {
        super(firstname, lastname, middlename, agedriver);
        this.Power = power;
        this.Manufacturer = manufacturer;

    }
}

class Car extends Engine {
    constructor(firstname, lastname, middlename, agedriver, power, manufacturer, modelname, modelclass, weightcar) {
        super(firstname, lastname, middlename, agedriver, power, manufacturer);
        this.modelName = modelname;
        this.modelClass = modelclass;
        this.weightCar = weightcar;
    }
    start() {
        console.log("Поїхали");
    }

    stop() {
        console.log("Зупиняємося");
    }

    turnRight() {
        console.log("Поворот праворуч");
    }
    turnLeft() {
        console.log("Поворот ліворуч");
    }
    toString() {
        console.log(`Имя: ${this.firstName}
Фамилие: ${this.lastName}
Отчество: ${this.middleName}
Стаж вождения: ${this.ageDriver}
Мощность: ${this.Power}
Производитель: ${this.Manufacturer}
Марка автомобиля: ${this.modelName}
Класс автомобиля: ${this.modelClass}
Масса автомобиля: ${this.weightCar} тон`);
    }
}
let drivers = new Car("Михаил", "Пупкин", "Александрович", 10, 240, "Mersedes", "Mers", "light", 6);
drivers.start();
drivers.stop();
drivers.turnRight();
drivers.turnLeft();
drivers.toString();