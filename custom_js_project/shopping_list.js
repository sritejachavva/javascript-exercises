
let add_btn = document.querySelector('button');
let li_items = document.body.querySelector('ul');
 
function readInput(){

    let tempvar =  document.getElementById('item').value;
    console.log(document.getElementById('item').value);
    let temp_li = document.createElement("li");
    temp_li.textContent = tempvar
    li_items.appendChild(temp_li);
}

add_btn.addEventListener('click',readInput);


