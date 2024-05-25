
//Dom manipulation concept

//GetElementById

const title = document.getElementById('.hole-content');
console.log(title);

//GetElementByclassName

const listitem = document.getElementsByClassName('.list-item');
console.log(listitem);

//GetElementByTagname

const listitem = document.getElementsByTagName('li');
console.log(listitem);

//querySelector

const content = document.querySelector('div');
console.log(content);

//querySelectorAll

const content = document.querySelectorAll('div');
console.log(content);







//dom manipulation style element

//querySelector

const title = document.querySelector('h1');

title.style.color = 'purple';

console.log(title);

//querySelectorAll

const listitem = document.querySelectorAll('.content');

listitem.style.color = 'purple';

console.log(listitem);





//create Element

const ul =  document.querySelector('ul');
const li = document.createElement('li');

//adding element

ul.append(li);

//modify text there are three types

const firstlistitem = document.querySelector('.list-item');

console.log(firstlistitem.innerText);
console.log(firstlistitem.textContent);
console.log(firstlistitem.innerHTML);


//modify text

li.innerText = 'Deadpool';


//Modify attribute there are three types (setAttribute,removeAttribute,getAttribute) & classes

li.setAttribute('class','main-heading');
li.removeAttribute('class');

const title = document.querySelector('main-heading');

console.log(title.getAttribute('class'));


//classes

li.classList.add('.list-item');
//li.classList.remove('.list-item');

console.log(li.classList.contains('list-item'));

//remove elements
li.remove();

  



//DOM manipulation child and parent concept & transware the dom

let ul = document.querySelector('ul');

/*
console.log(ul.parentNode);
showing ul parent class

console.log(ul.parentElement);
showing ul parent element
*/


console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentElement);

const html = document.querySelector('html');

console.log(html.parentNode);
console.log(html.parentElement);

//child node transversal


let ul = document.querySelector('ul');

console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

ul.childNodes[1].style.backgroundColor = 'blue';
ul.childNodes[1].style.color = 'white';

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);




//Sibiling Node traversal

let ul = document.querySelector('ul');
const div = document.querySelector('div');

console.log(div.childNodes);

//console.log(ul.previousSibling);
//console.log(ul.nextSibling)

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);



//Event Listeners

/*
element.addEventListener('click', function);

this is  main and use all concept
*/

const buttonTwo = document.querySelector('.btn-2');

function alertBtn(){
    alert('i also love Typescript concept');
};
buttonTwo.addEventListener("click", alertBtn);

//Mouse over changeing color method

const newBackgroundColor = document.querySelector('.btn-3');

function changeBgcolor() {
    newBackgroundColor.style.backgroundColor = 'blue';
}
newBackgroundColor.addEventListener("mouseover",
    changeBgcolor
)


//Event propagation 3phrase Event Capturing,Target,Event Bubbling

const container = document.getElementById("container");
const innerDiv = document.getElementById("innerDiv");

// Event listener on container (bubbling phase)
container.addEventListener("click", function() {
  console.log("Container Clicked!");
});

// Event listener on innerDiv (target and bubbling phase)
innerDiv.addEventListener("click", function(event) {
  console.log("Inner Div Clicked!");
  // Optional: Stop propagation to prevent further bubbling
  // event.stopPropagation();
});
