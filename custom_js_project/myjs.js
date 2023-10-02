const redtext = document.createElement("p");
const bluetext = document.createElement("h3");
const container = document.querySelector('#container');
const pinkBlackBox = document.createElement("div");
const metoo = document.createElement("p");
const indiv = document.createElement("h1");

redtext.classList.add('redtext');
bluetext.classList.add('bluetext');
pinkBlackBox.classList.add('pinkBlackBox');


redtext.textContent = 'Hey I’m red!';
redtext.style.color='Red';

bluetext.textContent = 'Hey I’m a blue h3!';
bluetext.style.color='blue';

pinkBlackBox.style.cssText = "background-color:pink; border-radius:10px; border-style:solid;color:black; width:200px; height:" +
                             "auto; line-height:0px; display: flex; flex-direction: column;"

indiv.textContent = 'I\'m in a Div!';
metoo.textContent = 'Me Too!';

function alertFunction(e) {
    console.log(e);
  }

function alertFunction2() {
alert("jk you didnt!");
}
  

const btn = document.querySelector('#btn');
btn.addEventListener('click', alertFunction);
btn.addEventListener('click', alertFunction2);



heading = document.querySelector('h1');

document.body.insertBefore(redtext,container);
document.body.insertBefore(bluetext,redtext);



pinkBlackBox.append(indiv);
pinkBlackBox.append(metoo);

container.append(pinkBlackBox);