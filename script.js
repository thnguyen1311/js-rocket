//This function changes class name
var doCoolStuff = function(){
    var currentClassName = document.getElementById('cool').className;
    if(currentClassName == 'cool'){
        document.getElementById('cool').className ='cool red';
    }else{
        document.getElementById('cool').className='cool';
    }
} 


var car ={
            make: 'VW',
            type: 'Polo',
            color: 'blue',
            isTurnOn: false,
            numberOfWheels: 4,
            seats: [
                "seat 1",
                "seat 2",
                "seat 3",
                "seat 4"
            ],
            turnOn: function () {
                this.isTurnOn = true;
                //this refers to the car object
            },
            fly: function() {
                alert("fly");
            },
            switchCar: function (isOn) {
                console.log ('turn car ' + isOn)
                if(isOn == true){
                    this.isTurnOn = true;
                }else {
                    this.isTurnOn = false;
                }
            }
        }