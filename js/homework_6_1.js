/*Створити клас Car , Engine та Driver.
Клас Driver містить поля - ПІБ, стаж водіння.
Клас Engine містить поля – потужність, виробник.
Клас Car містить поля – марка автомобіля, клас автомобіля,
вага, водій типу Driver, мотор типу Engine. Методи start(),
stop(), turnRight(), turnLeft(), які виводять на друк: "Поїхали",
"Зупиняємося", "Поворот праворуч" або "Поворот ліворуч".
А також метод toString(), який виводить повну інформацію про автомобіль,
її водія і двигуна.*/

class Car {
    constructor(modelname, modelclass, weightcar,  ) {
        this.modelName = modelname;
        this.modelClass = modelclass;
        this.weightCar = weightcar;
    }




}


class Driver {
    constructor(firstname, lastname, middlename, agedriver) {
        this.firstName = firstname;
        this.lastName = lastname;
        this.middleName = middlename;
        this.ageDriver = agedriver;
    }
}

class Engine {
    constructor(power, manufacturer) {
        this.Power = power;
        this.Manufacturer= manufacturer

    }
}