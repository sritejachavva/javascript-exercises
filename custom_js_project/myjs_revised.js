/*
---------- Instructions ----------
a <p> with red text that says “Hey I’m red!”
an <h3> with blue text that says “I’m a blue h3!”
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.


---------- PLAN ----------

*/

let containerElement = document.querySelector('#container');
let redtext = document.createElement("p");
let blueheading = document.createElement("h2");
let box = document.createElement("div");




redtext.textContent = 'Hey Im a red text';
redtext.style.cssText = 'color:red; margin:0.3em;';

blueheading.textContent = 'Hey Im a blue h3';
blueheading.style.cssText = 'color:blue; margin:0.3em;';

box.style.cssText = 'background-color:pink; border-radius:11px; display:flex; width:auto; width: fit-content; flex-direction: column; justify-content:center;'+
                    'align-items:center; border-style:dotted; border-color:black;';



document.body.insertBefore(redtext,containerElement);
document.body.insertBefore(blueheading,redtext.nextSibling);
document.body.insertBefore(box,blueheading.nextSibling);


box.appendChild(blueheading.cloneNode(true));
box.appendChild(redtext.cloneNode(true));

function hoverAlert(e) {
    alert("hey you hovered over me");
    console.log(e);
}

box.addEventListener('click', hoverAlert);

