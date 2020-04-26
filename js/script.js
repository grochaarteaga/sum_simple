function my_sum(){
    var num_1 = document.getElementById("input_1").value;
    var num_2 = document.getElementById("input_2").value;
    var total = Number(num_1) + Number(num_2);
    document.getElementById("demo").innerHTML = total;
}

function my_substraction(){
    var num_1 = document.getElementById("input_1").value;
    var num_2 = document.getElementById("input_2").value;
    var total = Number(num_1) - Number(num_2);
    document.getElementById("demo").innerHTML = total;
}



