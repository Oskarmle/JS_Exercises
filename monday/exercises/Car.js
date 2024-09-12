// Exercise 1
// Define the Car class:
// Create a class namedCar.
// Add a constructor that accepts make, model, and year as parameters and initializes these properties.

export class Car {
    constructor(make, model, year, isRunning){
        this.make = make;
        this.model = model;
        this.year = year;
        this.isRunning = isRunning; 
    }
    getCarInfo(){
        // console.log("The car is a " + this.make + " " + this.model + " and is from " + this.year);
    }
    startCar(){
        this.isRunning = true;
        // console.log("isRunning is " + this.isRunning);
    }
    stopCar(){
        this.isRunning = false;
        // console.log("isRunning is " + this.isRunning);
            
    }
}