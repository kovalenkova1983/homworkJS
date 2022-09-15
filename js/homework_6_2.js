/*Створити похідний від Car клас - Lorry (вантажівка), що характеризується також вантажопідйомністю кузова.
Створити похідний від Car клас - SportCar, який також характеризується граничною швидкістю.*/


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

class Lorry extends Car {
    constructor(firstname, lastname, middlename, agedriver, power, manufacturer, modelname, modelclass, weightcar, weighthard) {
        super(firstname, lastname, middlename, agedriver, power, manufacturer, modelname, modelclass, weightcar);
        this.weightHard = weighthard;
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
Масса автомобиля: ${this.weightCar} тон
Масса грузоподьемности: ${this.weightHard} тон`);
    }
}

let hardCar = new Lorry("Towrik", "Kizna", "Ayanami", 5, 800, "Kamaz", "Mers", "Hard", 6, 20);
hardCar.toString();

class SportCar extends Car {
    constructor(firstname, lastname, middlename, agedriver, power, manufacturer, modelname, modelclass, weightcar, maxspeed) {
        super(firstname, lastname, middlename, agedriver, power, manufacturer, modelname, modelclass, weightcar);
        this.maxSpeed = maxspeed;
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
Масса автомобиля: ${this.weightCar} тон
Максимальная скорость: ${this.maxSpeed} km/h`);
    }
}

let speedCar=new SportCar("Rey", "Ayanami", "Evangelion", 12, 600, "Honda", "Japan", "Light", 5, 300);
speedCar.toString();