const muesumForm = document.querySelector('#form1');
const usernameInput = document.querySelector('#username');
const favouritePainting = document.querySelector('#favourite');
const paintingsList = document.querySelector('#userPaintings');

muesumForm.addEventListener('submit', render);

function render(e){
    e.preventDefault();
    if(usernameInput.value == '' || favouritePainting.value == ''){
        alert('Please Enter the missing fields');
    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`Name: ${usernameInput.value}, Painting:${favouritePainting.value}`));
        paintingsList.appendChild(li);
        
        usernameInput.value = '';
        favouritePainting.value = '';
    }
}


function changeColor(){
    var color = prompt("What color would you like to change the paragraph to?")
    var test =document.getElementsByClassName("middleParagraph")
    for(var i = 0; i<test.length; i++){
        test[i].style.color = color;
    }
}

function changeDirection(){
    var direction = prompt("What direction do you want the images to be?")
    document.getElementById("imagegallery").style.flexDirection = direction;
    
}

function removeText(){
    let text;
    if(confirm("Would you like to remove the paragraph?") == true){
        text = "";
    }
        else{
        text = document.getElementById("middleText").outerHTML;
        alert("No changes have been done to the paragraph")
    }
    document.getElementById("middleText").innerHTML = text;
    
}

