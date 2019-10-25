'use strict';

const ulList = document.getElementById('the-ul');
ulList.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
});

//creating todos function
function createNewElement() {
    const li = document.createElement('li');
    const theInputValue = document.getElementById('the-input').value;
    const textNode = document.createTextNode(theInputValue);
    li.appendChild(textNode);
    
    if (theInputValue === '') {
        alert('Hey this cannot be empty')
    } else {
        document.getElementById('the-ul').appendChild(li);
    }

    document.getElementById('the-input').value = '';
    const closeButton = document.createElement('SPAN');
    const txt = document.createTextNode('\u00D7');
    closeButton.className = 'close';
    closeButton.appendChild(txt);
    li.appendChild(thePanTag);

    closeButton.addEventListener('click' , function () {
        const theDiv = this.parentElement;
        theDiv.style.display = 'none';
    });
}

const input = document.getElementById('the-input');
const button = document.getElementById('addButton');

input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        createNewElement();
    }
});

button.addEventListener('click', () => {
    createNewElement();
});