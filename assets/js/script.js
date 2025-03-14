const tareas = [
    {
        id: 1,
        name: "Empezar desafio",
        status: false
    },

    {
        id: 2,
        name: "Estudiar para examen",
        status: false
    },
    {
        id: 3,
        name: "Jugar una partida de Fornite",
        status: false
    }
];

const addTarea = document.getElementById('addBtn');
const inputTarea = document.getElementById('newTarea');
const tareaInput = document.querySelector("#nuevaTarea")
const buscadorInput = document.querySelector("#buscarTarea")
const listTarea = document.getElementById('tableTareas');
const totalTarea = document.getElementById('totalTarea');
const doneTarea = document.getElementById('doneTarea');
let tareaId = tareas.length + 1;
let doneCountTarea = 0;



const renderTareas = () => {
    let html = "";

    for (let tarea of tareas) {
        inputTarea.value = "";
        html += `
        <tr>
        <td>${tarea.id}</td> 
        <td class="tarea-line-through">${tarea.name} </td>
        <td><input type="checkbox" class="checkbox-btn" onclick="checkbox(${tarea.id})"> </td>
        <td><button class="del-btn"
        onclick="deleteTarea(${tarea.id})">X</button> </td>
        </tr>`;
    }
    listTarea.innerHTML = html;
    totalTarea.innerHTML = `${tareas.length}`;
};

addTarea.addEventListener('click', () => {
    const newTarea = { id: tareaId, name: inputTarea.value, status: false }
    tareas.push(newTarea)
    tareaId++;

    if (!inputTarea.value) {
        alert("Ingrese una tarea");
        tareas.pop();
    } else {
        renderTareas();
    }
});

inputTarea.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { 
        event.preventDefault();  
        
       
        const newTarea = { id: tareaId, name: inputTarea.value, status: false };
        if (!inputTarea.value) {
            alert("Ingrese una tarea");
        } else {
            tareas.push(newTarea);
            tareaId++;
            renderTareas();
        }

       
        inputTarea.value = "";
    }
});
const deleteTarea = (id) => {
    const index = tareas.findIndex((ele) => ele.id === id);
    tareas.splice(index, 1);
    renderTareas();
};

const checkbox = (id) => {
    const indice = tareas.findIndex((e) => e.id === id)
    if (tareas[indice].status === false) {
        tareas[indice].status = true;
        doneCountTarea += 1;
    } else {
        tareas[indice].status = false;
        doneCountTarea -= 1;
    }
    doneTarea.innerHTML = `${doneCountTarea}`
};

window.onload = () => {
    renderTareas();
};