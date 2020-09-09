
function square() {
    square_num = document.getElementById('square').value;
    document.getElementById('display-square').innerHTML=`The Square of ${square_num} = ${square_num ** 2}`;
}
function power() {
    power_num = document.getElementById('power-num').value;
    Power = document.getElementById('Power').value;
    document.getElementById('display-power').innerHTML= `${power_num} ^ ${Power} = ${power_num **  Power}`;
}

function aandp() {
    l = parseFloat(document.getElementById('length').value);
    b = parseFloat(document.getElementById('breadth').value);

    area = document.getElementById('display-area').innerHTML = `Area = ${l * b}`;
    perimeter = document.getElementById('display-perimeter').innerHTML = `Perimeter = ${2*(l + b)}`
}