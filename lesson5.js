/*
1)
Car -> num_of_wheels, speed, method drive() -> console.log('Driving on ' + this.speed + 'kms per hour');
Truck : Car -> num_of_wheels = 6
Bycicle: Car -> num_of_wheels = 2, speed = 20
Вы можете менять поля num_of_wheels и speed после инициализации
2*) Сделать эти поля приватными (т.е. изменение полей после инициализации невозможно, через замыкание)
*/


var Car = function(num_of_wheels, speed) {
	var privateWheels = wheels;
	var privateSpeed = speed;

	this.getWheels = function() {
		return privateWheels;
	}
}

Car.prototype.drive = function() {
	console.log('Driving on ' + this.speed + ' kms per hour');
}

var leaf = new Car(4, 100);

var Truck = function(speed) {
	Car.call(this, 6, speed);

}

Truck.prototype = Object.create(Car.prototype);


var Bycicle = function() {
	Car.call(this, 2, 20);
}

Bycicle.prototype = Object.create(Car.prototype);