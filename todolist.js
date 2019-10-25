

//Close button
const closeButton = document.getElementsByClassName("close");

for (i = 0; i < closeButton.length; i++){
    closeButton[i].onclick = function () {
        const theDiv = this.parentElement;
        theDiv.style.display = "none";
    }
}

const ulList = document.getElementById('the-ul');
ulList.addEventListener('click', function(event) {
    console.log(event);
    if(event.target.tagName === "LI"){
        event.target.classList.toggle('checked');
    }
},false);

//creating todos function
function createNewElement() {
    var li = document.createElement('li');
    var theInputValue = document.getElementById("the-input").value;
    var textNode = document.createTextNode(theInputValue);
    li.appendChild(textNode);

    function newItem() {
        theInputValue = document.getElementById("the-input").value;
        var ul = document.getElementById("the-ul");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(theInputValue));
        ul.appendChild(li);
        document.getElementById("the-input").value = "";
    }

    document.body.onkeyup = function(e) {
        if (e.keyCode == 13) {
            newItem();
        }
    };

    if (theInputValue === '') {
        alert("Hey this cannot be empty")
    } else {
        document.getElementById("the-ul").appendChild(li);
    }
    document.getElementById("the-input").value = "";
    const thePanTag = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    thePanTag.className = "close";
    thePanTag.appendChild(txt);
    li.appendChild(thePanTag);


    // Removing items when click on SPAN close button

    for (i = 0; i < closeButton.length; i++){
        closeButton[i].onclick = function () {
            const theDiv = this.parentElement;
            theDiv.style.display = "none";
        }
    }
}

const input = document.getElementById("the-input");
const button = document.getElementById("addButton");

input.addEventListener('keydown', =>() {
    if (e.keyCode === 13){
        createNewElement();
}
});

button.addEventListener('click', =>() {
    createNewElement();
});