/*
 Adding keyword in this project

 document.querySelector
 addEventListener
 Math.Object()
 innerText
*/

let btn = document.querySelector('#new-qoute');
let qout = document.querySelector('.quot');
let person = document.querySelector('.person');

const quots = [{
    qoutes: "Black holes are not really holes or dark spots, but objects that are so dense that nothing, not even light, can escape their gravity",
    person:"Stephen Hawking"
},
{
    qoutes: "I was first astonished, then delighted.This quote by Marie Curie reflects her initial surprise and then her fascination with the discovery of radioactivity, a phenomenon she  pioneered research on.",
    person:"Marie Curie"
},
{
    qoutes: "Time is what prevents everything from happening at once.This quote by Einstein captures the relative nature of time according to his theory of relativity.",
    person:"Albert Einstein"
},
{
    qoutes: "Science is the foundation of all progress.This quote by Louis Pasteur, who is famous for his work on vaccines and germ theory, highlights the importance of science in driving human progress.",
    person:"Louis Pasteur"
},];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quots.length);
    quots.innerText = quots[random].quot;
    person.innerText = quots[random].person;
})