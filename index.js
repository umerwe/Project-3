const input = document.getElementById('input');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (input.value === '') {
        alert('Write in input box');
    }
    else {
        listContainer.innerHTML +=
            `<div>
                <li>${input.value}</li>
                <i class="fa-solid fa-xmark fa-2xl"></i>
        </div>`;
        input.value = '';
        saveData();
    }
}

listContainer.addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if (e.target.tagName === 'I') {
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem('data');
}
showData();