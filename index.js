function appendToDisplay(value){
    document.getElementById("display").value += value;
}

function clearDisplay(){
    document.getElementById("display").value = "";
}

function calculate(){
    const display = document.getElementById("display");
    try{
        // console.log(display.value)
        console.log(eval(display.value));
        display.value = eval(display.value);
    }
    catch(err){
        display.value = err;
        console.log(err);
    }
}