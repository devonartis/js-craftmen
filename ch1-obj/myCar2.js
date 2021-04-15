var makeCar = function() {
  var newCar = {};
  newCar.honk = function () {
    console.log("Honnkkkk!!!! ");
  }

  newCar.drive = function() {
    console.log("VROOM .......")
  }

  return newCar;
}


for i =1; i <=10; i++ {
  cari = makeCar();  
}

car8.honk();