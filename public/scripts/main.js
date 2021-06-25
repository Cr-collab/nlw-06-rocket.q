import Modal from './modal.js';

const modal = Modal();

//pegar todos botãoes que existe com a classe check
const checkButtons = document.querySelectorAll('.actions a.check');

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');


checkButtons.forEach(button => {button.addEventListener('click', (event)=>{  handleClick( event , true)} )});
// for( const button of checkButtons) {

//     button.addEventListener('click', (event)=>{
//        //abrir modal
//         modal.open();
//     })

// }


/** Quando o delete for clickado ele abre a modal */
const deleteButtons = document.querySelectorAll('.actions a.delete');

deleteButtons.forEach(button => {button.addEventListener('click', (event)=>{  handleClick( event , false) } )});


function handleClick(event , check = true) 
{
    event.preventDefault();
    const text = check  ? "Marcar como lida" : "Excluir";
    const slug = check ? "check": "delete";

    const roomId = document.querySelector("#room-id").dataset.id;
    const questionId =  event.target.dataset.id;

    const form = document.querySelector(".modal form");
    form.setAttribute("action", `/questions/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML =`Tem certeza que deseja ${text.toLowerCase()} esta pergunta`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    if(check) {modalButton.classList.remove('red')} else {modalButton.classList.add('red')}


    //abrir modal
    modal.open();
}





