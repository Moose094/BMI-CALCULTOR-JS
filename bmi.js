
let poundSelect, inchSelect;

// creating a function that shows the unit of measurement when a user clicks on standard radio 
function standardChose(){
    poundSelect = document.getElementById('weightSymbol');
    inchSelect = document.getElementById('heightSymbol');
    poundSelect.textContent = 'lbs'; 
    inchSelect.textContent = 'inches';
}

let kiloSelect, meterSelect;

// creating a function that shows the unit of measurement when a user clicks on metric radio 
function metricChose(){
    kiloSelect = document.getElementById('weightSymbol');
    meterSelect = document.getElementById('heightSymbol');
    kiloSelect.textContent = 'kg';
    meterSelect.textContent = 'meters (m)';
}


var weightInput, heightInput, finalheightInput, bmiResult, yourBmi;


function calculate(){

    // The logic for calculating bmi using standard data

    weightInput = document.getElementById("weightIn").value;
    heightInput = document.getElementById("heightIn").value;
    finalheightInput = heightInput* heightInput;
    bmiResult = (weightInput/finalheightInput) * 703;

    if (document.getElementById('standard').checked &&bmiResult <= 18.4){
        
        yourBmi = "You" + " " + "are" + " " + "underweight\n" +
        
        "your" + " " + "bmi" + " " + "is" + " " + bmiResult;
        document.getElementById("display").innerHTML = yourBmi;   
        document.getElementById("under").style.backgroundColor = "lightyellow";
        document.getElementById("under1").style.backgroundColor = "lightyellow";
        document.getElementById("display").style.backgroundColor = "lightyellow";
        
    }

    else if (document.getElementById('standard').checked  && bmiResult >= 18.5 && bmiResult <= 24.9){
        yourBmi = "You" + " " + "are" + " " + "Normal\n" +
        "your" + " " + "bmi" + " " + "is" + " " +bmiResult;
        document.getElementById("display").innerHTML = yourBmi; 
        document.getElementById("norm").style.backgroundColor = "green";
        document.getElementById("norm1").style.backgroundColor = "green";
        document.getElementById("display").style.backgroundColor = "green";
        document.getElementById("display").style.color = "white";

    }

    else if (document.getElementById('standard').checked && bmiResult >= 25.0 && bmiResult <= 39.9){
        yourBmi = "You" + " " + "are" + " " + "Overweight \n" +
        "your" + " " + "bmi" + " " + "is" + " " +bmiResult;
        document.getElementById("display").innerHTML = yourBmi; 
        document.getElementById("over").style.backgroundColor = "orange";
        document.getElementById("over1").style.backgroundColor = "orange";
        document.getElementById("display").style.backgroundColor = "orange";
         document.getElementById("display").style.color = "white";


    }

    else if (document.getElementById('standard').checked && bmiResult >= 40){
        yourBmi = "You" + " " + "are" + " " + "obese \n" +
        "your" + " " + "bmi" + " " + "is" + " " +bmiResult;;
        document.getElementById("display").innerHTML = yourBmi; 
        document.getElementById("ob").style.backgroundColor = "red";
        document.getElementById("ob1").style.backgroundColor = "red";
        document.getElementById("display").style.backgroundColor = "red";
        document.getElementById("display").style.color = "white";


    }



     // The logic for calculating bmi using metric data

    weightInput = document.getElementById("weightIn").value;
    heightInput = document.getElementById("heightIn").value;
    finalheightInput = heightInput* heightInput;
    metricBmiResult = (weightInput/finalheightInput);

    if (document.getElementById('metric').checked && metricBmiResult <= 18.4){
        
        yourBmi = "You" + " " + "are" + " " + "underweight\n" +
        
        "your" + " " + "bmi" + " " + "is" + " " + metricBmiResult;
        document.getElementById("display").innerHTML = yourBmi;   
        document.getElementById("under").style.backgroundColor = "lightyellow";
        document.getElementById("under1").style.backgroundColor = "lightyellow";
        document.getElementById("display").style.backgroundColor = "lightyellow";
    }

    else if (document.getElementById('metric').checked  && metricBmiResult >= 18.5 && metricBmiResult <= 24.9){
        yourBmi = "You" + " " + "are" + " " + "Normal\n" +
        "your" + " " + "bmi" + " " + "is" + " " +metricBmiResult;
        document.getElementById("display").innerHTML = yourBmi; 
        document.getElementById("norm").style.backgroundColor = "green";
        document.getElementById("norm1").style.backgroundColor = "green";
        document.getElementById("display").style.backgroundColor = "green";
        document.getElementById("display").style.color = "white";

    }

    else if (document.getElementById('metric').checked && metricBmiResult >= 25.0 && metricBmiResult <= 39.9){
        yourBmi = "You" + " " + "are" + " " + "overweight\n" +
        "your" + " " + "bmi" + " " + "is" + " " +metricBmiResult;
        document.getElementById("display").innerHTML = yourBmi; 
        document.getElementById("over").style.backgroundColor = "orange";
        document.getElementById("over1").style.backgroundColor = "orange";
        document.getElementById("display").style.backgroundColor = "orange";
        document.getElementById("display").style.color = "white";


    }

    else if (document.getElementById('metric').checked && metricBmiResult >= 40){
        yourBmi = "You" + " " + "are" + " " + "obese\n" +
        "your" + " " + "bmi" + " " + "is" + " " +metricBmiResult;
        document.getElementById("display").innerHTML = yourBmi; 
        document.getElementById("ob").style.backgroundColor = "red";
        document.getElementById("ob1").style.backgroundColor = "red";
        document.getElementById("display").style.backgroundColor = "red";
        document.getElementById("display").style.color = "white";


    }




    
    

}
