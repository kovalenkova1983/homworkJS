/*Створити похідний від Car клас - Lorry (вантажівка), що характеризується також вантажопідйомністю кузова.
Створити похідний від Car клас - SportCar, який також характеризується граничною швидкістю.*/




class Car {
    constructor(modelname, modelclass, weightcar) {
       
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
        console.log(`
Марка автомобиля: ${this.modelName}
Класс автомобиля: ${this.modelClass}
Масса автомобиля: ${this.weightCar} тон`);
    }
}
let cars = new Car("Mersedes", "Mers", "light", 6);
cars.start();
cars.stop();
cars.turnRight();
cars.turnLeft();
cars.toString();

class Lorry extends Car {
    constructor(modelname, modelclass, weightcar, weighthard) {
        super( modelname, modelclass, weightcar);
        this.weightHard = weighthard;
    }
    toString() {
        console.log(`
Марка автомобиля: ${this.modelName}
Класс автомобиля: ${this.modelClass}
Масса автомобиля: ${this.weightCar} тон
Масса грузоподьемности: ${this.weightHard} тон`);
    }
}

let hardCar = new Lorry("Mers", "Hard", 6, 20);
hardCar.toString();

class SportCar extends Car {
    constructor(modelname, modelclass, weightcar, maxspeed) {
        super(modelname, modelclass, weightcar);
        this.maxSpeed = maxspeed;
    }

    toString() {
        console.log(`
Марка автомобиля: ${this.modelName}
Класс автомобиля: ${this.modelClass}
Масса автомобиля: ${this.weightCar} тон
Максимальная скорость: ${this.maxSpeed} km/h`);
    }
}

let speedCar=new SportCar("Honda", "Light", 5, 300);
speedCar.toString();