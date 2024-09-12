import { Car } from "./Car.js";
//////////////////////// EXERCISE CAR
// Exercise 1
// Define the Car class:
// Create a class namedCar.
// Adda constructor that accepts make, model, and year as parameters and initializes these properties.
// See Car.js



// Exercise 2
// AddMethods:
// getCarInfo method: This method should return a string containing the car's make, model, and year.
// start method: This method should set a property called isRunning to true and return a string indicating the car has started.
// stopmethod: This method should set the isRunning propertyto false and return a string indicating the car has stopped.
const car1 = new Car("Tesla", "Model 3", "2021")
car1.getCarInfo();
car1.startCar();
car1.stopCar();
// Exercise 3

// Create Instances and Test Methods:
// ▪ Create two instances of the Car class with different make, model, and year values.
// ▪ Call the getCarInfo, start, and stop method
const car2 = new Car("toyota", "Yaris", "2023")
const car3 = new Car("Ford", "Mustang", "1968")
car2.getCarInfo();
car2.startCar();
car2.stopCar();

car3.getCarInfo();
car3.startCar();
car3.stopCar();
