
let add_btn = document.querySelector('button');
let li_items = document.body.querySelector('ul');
 


function readInput(){

    let tempvar =  document.getElementById('item').value;
    console.log(document.getElementById('item').value);
    let temp_span = document.createElement("span");
    let temp_button = document.createElement("button");
    let temp_li = document.createElement("li");
    temp_span.textContent = tempvar;
    temp_button.innerHTML = "Delete";
    li_items.appendChild(temp_li);
    
    
    temp_li.appendChild(temp_span);
    temp_li.appendChild(temp_button);
    document.getElementById('item').value = '';


    function deleteItem(){
        //alert("HI");
        temp_li.parentNode.removeChild(temp_li);
    }



    temp_button.addEventListener('click',deleteItem);
    document.getElementById('item').focus();

}

add_btn.addEventListener('click',readInput);


