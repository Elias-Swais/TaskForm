const muesumForm = document.querySelector('#form1');
const usernameInput = document.querySelector('#username');
const favouritePainting = document.querySelector('#favourite');


const paintingsList = document.querySelector('#userPaintings'); 
const paintings = JSON.parse(localStorage.getItem('paintings')) || []; // actual list 




muesumForm.addEventListener('submit', render);

function render(e){
    e.preventDefault();
    if(usernameInput.value == '' || favouritePainting.value == ''){
        alert('Please Enter the missing fields');
    }
    else{
        var p = new MuesemPainting(usernameInput.value,favouritePainting.value);

        p.add(); 
        usernameInput.value = '';
        favouritePainting.value = '';
        p.print();
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
        alert("No changes have been done to the paragraph");
    }
    document.getElementById("middleText").innerHTML = text;
    
}



//----------------- Class -----------------------------------
 class MuesemPainting{
        constructor(username, painting) {
            this.username = username;
            this.painting = painting;
          }
     
          print() {

            paintingsList.innerHTML='';
            paintings.forEach(item => {
              const li = document.createElement('li');
              const deleteButton = document.createElement('button');
              deleteButton.innerText = 'Delete';
              deleteButton.addEventListener('click', () => this.delete());
              li.textContent = `Name: ${item.username}, Painting: ${item.painting}`;
              li.style.color = 'white';   
              
              li.appendChild(deleteButton);
       
              //concat new output 
            
             
             paintingsList.innerHTML += li.outerHTML;
            });
        
        }
    
    
          delete() {
            const paintings = JSON.parse(localStorage.getItem('paintings')) || [];
            const index = paintings.indexOf(this); //get size

            if (index > -1) {
              paintings.splice(index, 1);
              localStorage.setItem('paintings', JSON.stringify(paintings));  
              }}

        add()  
        {
         paintings.push(this);
         localStorage.setItem('paintings', JSON.stringify(paintings));
        alert("Succesfully added a new painting");
          }
    }

