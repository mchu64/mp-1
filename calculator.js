function addition() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    let output = Number(first) + Number(second);
    colorRedorNah(output);
    document.getElementById("output").innerHTML = output;
}

function subtraction() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    let output = Number(first) - Number(second);
    colorRedorNah(output);
    document.getElementById("output").innerHTML = output;
}

function multiplication() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    let output = Number(first) * Number(second);
    colorRedorNah(output);
    document.getElementById("output").innerHTML = output;
}

function division() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    let output = Number(first) / Number(second);
    colorRedorNah(output);
    document.getElementById("output").innerHTML = output;
}

function power() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    first = Number(first);
    second = Number(second);
    let output = 1;

    for (let i = 0; i < second; i++) {
        output *= first;
    }

    colorRedorNah(output);
    document.getElementById("output").innerHTML = output;
}

function clearCalculator() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
}

function colorRedorNah(result) {
    let output = document.getElementById("output");
    if (result<0){
        output.style.color = "red";
    } else{
        output.style.color = "black";
    }
}