// ordre des priorité en JS !important > <div> > #id > .class > baliseHTML

//SELECTEURS
//sectionne qqch et change le fond: document.querySelector('h4').style.background = "blue";

//click event
//loguer (pointer) un element a la variable de la console (Declarer variable)
const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const response = document.querySelector("p");
console.log(questionContainer);
console.log(btn1, btn2);
console.log(response);
// ajouter un event nombre de clic efectuer dans la balise dans la console
questionContainer.addEventListener('click',()=>{
    console.log("Click !");
    // au clic changement de couleur: questionContainer.style.background = "red";
    // ajouter une border au clic: questionContainer.style.border = "3px solid teal";
    //ajouter plusieur changement en une fois  avec effet de chaque clic changement création de question-click en css
    questionContainer.classList.toggle("question-click")
});
btn1.addEventListener('click',()=>{
    console.log("Click !");
    //class créer en CSS
    response.classList.add('show-response');
    response.style.background = "green";
});    
btn2.addEventListener("click",()=>{
    console.log("Click !");
    //class créer en CSS
    response.classList.add('show-response');
    response.style.background = "red";
}); 

//------------------------------------------------------

//Mouse Events
const mousemove = document.querySelector('.mousemove');

console.log(mousemove);
window.addEventListener("mousemove", (e) => {
    mousemove.style.left=e.pageX+"px";
    mousemove.style.top=e.pageY+"px";
});
window.addEventListener("mousedown", () =>{
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});
window.addEventListener("mouseup", () =>{
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
});
questionContainer.addEventListener('mouseenter', ()=>{
    questionContainer.style.background="rgba(0,0,0,0.6)";
})
questionContainer.addEventListener("mouseout", ()=>{
    questionContainer.style.background="pink";
})
response.addEventListener('mouseover', ()=>{
    response.style.transform="rotate(2deg)";
})

//---------------------------------------------------

//KeyPress event
const keyPressContainer = document.querySelector('.keypress');
const key = document.getElementById("key");
const ring =()=>{
    const audio = new Audio();
    audio.src = "./assets/Enter.mp3";
    audio.play();
}

document.addEventListener('keypress', (e) => {
    key.textContent=e.key;
    ring();
});

//---------------------------------------------------

//scroll event

const nav=document.querySelector("nav");
window.addEventListener("scroll", ()=>{
    if (window.scrollY > 120){
        nav.style.top= 0;
    } else {
        nav.style.top="-50px";
    }
});

//--------------------------------------------------

//Form Event

const inputName = document.querySelector('input[type="text"]');
const select=document.querySelector('select');
const form = document.querySelector("form");
let pseudo="";
let language="";

inputName.addEventListener("input", (e)=>{
    pseudo=e.target.value;
})
select.addEventListener("input", (e)=>{
    language=e.target.value;
})
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if (cgv.checked) {
        document.querySelector('form > div').innerHTML = `
            <h3>Pseudo : ${pseudo}</h3>
            <h4>Langage préféré : ${language}</h4>
        `;
    } else {
        alert("Veuillez accepter les CGV");
    }
});

//--------------------------------------------------

//Load event

window.addEventListener("load", ()=> {
    console.log("Document chargé !");
});

//--------------------------------------------------

//ForEach
//selectionner plusieur chose en même temps
const boxes = document.querySelectorAll("box");

//diminuer les objet selectionner
boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        e.target.style.transform = "scale(0.7)";
    });
});

//---------------------------------------------------

//BOM Browser Object Model 

// connaitre la taille de la page: console.log(window.innerHeight);
// connaitre la position souris axe Y: console.log(window.scrollY);

//créer une page Pop-up (ouverture d'une page ou d'un nouveau onglet) : window.open("http://google.com", "cours js", "height=600px, width=800px");
//fermer la pop-up dans la console du navigateur : window.close()

//Evenement adossés à windows:
// alert("Hello");
//confirm
btn2.addEventListener("click", () => {
    confirm("Voulez vous vraiment confirmer ce choix ?");
});

//prompt
btn1.addEventListener("click", () => {
    let answer = prompt("Entrez votre nom !");

    questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>"
});