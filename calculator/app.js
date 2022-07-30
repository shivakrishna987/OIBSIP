let output = document.getElementById("output");

//OutputScreen
function display(num){
    output.value += num;
}

function Calculate(){
    try{
        output.value = eval(output.value);
    }
    catch{
        alert("Invalid Operation!");
    }
}

function sqrt(){
    try{
        output.value = Math.sqrt(output.value);
    }
    catch{
        alert("Invalid Operation!");
    }
}

function Clear(){
    output.value="";
}

function del(){
    output.value = output.value.slice(0,-1);
}