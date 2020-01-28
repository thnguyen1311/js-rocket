//declare global variables
var timer = null;
var changeState = function (state) {
    document.body.className = "body-state" + state;
    clearInterval(timer);
    var countdownNumber1 = 10;
    var countdownNumber2 = 10;
    document.querySelector('.countdown').innerHTML = countdownNumber1;
    document.querySelector('.countdown2').innerHTML = countdownNumber2;
    /* If we dont have this above line of code, the countdownNumber will stay at 9 when we recountdown 'cause we havent assign the value to the element, in line 13, countdownNumber = 9, till then we assign it to the element 
     */
    if (state == 1) {
        document.getElementById('nervous').className = 'nervous';
        document.getElementById('cant-wait').className = 'cant-wait';
    }
    if (state == 2) {
        timer = setInterval(function () {
            countdownNumber1 = countdownNumber1 - 1;
            countdownNumber2 = countdownNumber2 - 1;
            document.querySelector('.countdown').innerHTML = countdownNumber1;
            document.querySelector('.countdown2').innerHTML = countdownNumber2;
            /*countdownNumber = countdownNumber - 1;
            Here we put this line of code before document... so the time the number stays as 10 will lessen
            */
            if (countdownNumber1 > 3 && countdownNumber1 <= 6 && countdownNumber2 > 3 && countdownNumber2 <= 6) {
                document.getElementById('nervous').className = 'nervous show';
            } else {
                document.getElementById('nervous').className = 'nervous';
            }
            if (countdownNumber1 >= 1 && countdownNumber1 <= 3 && countdownNumber2 >= 1 && countdownNumber2 <= 3) {
                document.getElementById('cant-wait').className = 'cant-wait show';
            } else {
                document.getElementById('cant-wait').className = 'cant-wait';
            }
            if (countdownNumber1 <= 0 && countdownNumber2 <= 0) {
                changeState(3);
            }
        }, 1000);
    } else if (state == 3) {
        var success = setTimeout(function () {
            var randomNumber = Math.round(Math.random() * 10);
            console.log(randomNumber);
            if (randomNumber > 9) {
                changeState(4);
            } else {
                changeState(5);
            }
        },1500);
        /*to let the rocket continue to fly you have to add the following styling (if success):
            body.body-state4 .rocket{bottom:1050px;}
        If not the rocket will come down after the set amount of time given to the setTimeout method (2s)*/
    }
}
