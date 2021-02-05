let numStack = [];


function Push(){
    let pushed = document.getElementById('num').value;
    numStack.push(pushed);
    console.log(numStack);
}


function Addition(){
    var x = numStack[0];
    var y = numStack[1];
    let inputPlus = parseInt(x) + parseInt(y);
    
    numStack.pop(numStack[0]);
    numStack.pop(numStack[1]);
    numStack.push(inputPlus);
    console.log(numStack);
        
}

function Subtraction(){
    var x = numStack[0];
    var y = numStack[1];
    let inputMinus = parseInt(x) - parseInt(y);
    numStack.push(inputMinus);
    console.log(numStack);
}

function Multiplication(){
    var x = numStack[0];
    var y = numStack[1];
    let inputMult = parseInt(x) * parseInt(y);
    numStack.push(inputMult);
    console.log(numStack);
}

function Division(){
    var x = numStack[0];
    var y = numStack[1];
    let inputDiv = parseInt(x) / parseInt(y);
    numStack.push(inputDiv);
    console.log(numStack);
}

function Print(){
    
    document.getElementById('outputBox').innerHTML = numStack[0];
}