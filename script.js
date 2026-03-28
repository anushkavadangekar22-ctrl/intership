function add(val) {
    document.getElementById("display").value += val;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function result() {
    let x = document.getElementById("display").value;
    document.getElementById("display").value = eval(x);
}