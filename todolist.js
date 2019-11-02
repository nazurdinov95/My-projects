'use strict';

const ulList = document.getElementById('the-ul');
ulList.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
});

    //creating todos function
function createNewElement() {
    var listItem = document.createElement('li');
    const theInputValue = document.getElementById('input').value;
    const textNode = document.createTextNode(theInputValue);
    listItem.appendChild(textNode);




    if (theInputValue === '') {
        alert('Hey this cannot be empty')
    } else {
        document.getElementById('the-ul').appendChild(listItem);
    }

    document.getElementById('input').value = '';
    const closeButton = document.createElement('SPAN');
    const editButton = document.createElement('button');
    const txt = document.createTextNode('\u00D7');
    editButton.innerHTML = "<i class='material-icons' >edit</i>";
    closeButton.className = 'close';
    editButton.className = "material-icons edit";

    closeButton.appendChild(txt);
    listItem.appendChild(closeButton);
    listItem.appendChild(editButton);


    closeButton.addEventListener('click' , function () {
        const theDiv = this.parentElement;
        theDiv.style.display = 'none';
    });
}

function editTask() {
    const editButton = this;
    const listItem = this.parentNode;
    const label = listItem.querySelector('label');
    var input = listItem.getElementById('input [type=text]');
    const containsClass = listItem.classList.contains('editMode');

    if (containsClass){
        label.innerText = input.value;
        editButton.className = "material-icons edit";
        editButton.innerHTML = "<i class='material-icons' >edit</i>";
    }else {
        input.value = label.innerText;
        editButton.className = "material-icons save";
        editButton.innerHTML = "<i class='material-icons' >save</i>";
    }
    listItem.classList.toggle('editMode');

}

const input = document.getElementById('input');
const button = document.getElementById('addButton');

input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        createNewElement();
    }
});

button.addEventListener('click', () => {
    createNewElement();
})