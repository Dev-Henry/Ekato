//get the values from the interface
//start or controller function
function getValues() {
    //get values from the page 
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
   
    //parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    //we call generateNumbers
    let numbers = generateNumbers(startValue, endValue);
     //we call displayNumbers
     displayNumbers(numbers);

    }else{
        alert("You must enter an integer")
    }
    }

//generate numbers from the start values to the end values
//logic function(s)
function generateNumbers(sValue, eValue){

    let numbers = [];

    //we need to validate our input
    //we want to get all numbers from start to end using a loop
    for (let index = sValue; index <= eValue; index++){

        //this will execute in a loop until index  = eValue
        numbers.push(index);
    }

    return numbers;
}

//display the numbers and mark the even numbers bold
//display or view function
function displayNumbers(numbers) {

    let templateRows = "";

    let className = "even";

    for (let index = 0; index < numbers.length; index++) {

        let number = numbers[index];

        if(number % 2 === 0){
            className = "even";
        }
        else{
            className = "odd"
        }
        templateRows += `<tr><td class = "${className}" >${number}</td></tr>`
    }

    document.getElementById("results").innerHTML = templateRows;
}

