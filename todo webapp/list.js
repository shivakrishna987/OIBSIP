const toDoItems = document.getElementsByClassName("items")[0];
const input = document.getElementById("input");

input.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        addItem();
    }
})

function addItem(){
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkIcon = document.createElement("i");
    var delIcon = document.createElement("i");
    var colors = ['#ff0000', '#00ff00', '#0000ff'];
    

    divParent.className = "item";
    var random_color = colors[Math. floor(Math. random() * colors. length)];
    divParent.style.color = random_color;
    divParent.innerHTML = '<div>'+input.value+'</div>';

    checkIcon.className = "fas fa-check";
    checkIcon.style.color = "lightgrey";
    checkIcon.addEventListener("click", function(){
        if(checkIcon.style.color === "lightgrey"){
            checkIcon.style.color = "#00FFAB";
            divParent.style.textDecoration="line-through";
            divParent.style.opacity = "0.6";
        }
        else{
            checkIcon.style.color = "lightgrey";
            divParent.style.textDecoration="none";
            divParent.style.opacity = "1";
        }
    })

    divChild.appendChild(checkIcon);

    delIcon.className = "fas fa-trash";
    delIcon.style.color = "#F32424";
    delIcon.addEventListener("click", function(){
        divParent.remove();
    })

    divChild.appendChild(delIcon);

    divParent.appendChild(divChild);


    toDoItems.appendChild(divParent);

    input.value = '';

}
