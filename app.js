let submitButton=document.querySelector('.submit-invite');
let sectionCards=document.querySelector('.cards');
let containerCard=document.querySelector('.card');
let inputInvites=document.querySelector('.input-invite');


function attachCard(text){
    let containerDiv=document.createElement('div');
    containerDiv.classList.add('card');
   
    let nameInvite=document.createElement('h3');
    nameInvite.textContent=inputInvites.value;

    let cardInputDiv=document.createElement('div');
    cardInputDiv.classList.add('card-input');

    let labelContainer=document.createElement('label');
    labelContainer.textContent='Confirmed';

    let checkBoxContainer=document.createElement('input');
    checkBoxContainer.classList.add('input-checkbox');
    checkBoxContainer.type='checkbox';

   cardInputDiv.appendChild(labelContainer);
   cardInputDiv.appendChild(checkBoxContainer);
    

    let buttonsDiv=document.createElement('div');
    buttonsDiv.classList.add('buttons');

    let btnEdit=document.createElement('button');
    btnEdit.textContent='Edit';
    btnEdit.classList.add('btn-edit');

    let btnRemove=document.createElement('button');
    btnRemove.textContent="Remove";
    btnRemove.classList.add('btn-remove');


    buttonsDiv.appendChild(btnEdit);
    buttonsDiv.appendChild(btnRemove);


    containerDiv.appendChild(nameInvite);
    containerDiv.appendChild(cardInputDiv);
    containerDiv.appendChild(buttonsDiv);

    return containerDiv;
}

submitButton.addEventListener("click",(e)=>{
    if(inputInvites.value!=''){
    let name=inputInvites.value;
    sectionCards.appendChild(attachCard(name));
    }
})

sectionCards.addEventListener("click",(e)=>{
    let obj=e.target;
    if(obj.classList.contains("btn-remove")){
        let buttonContainer=obj.parentNode;
        let container=buttonContainer.parentNode;
        sectionCards.removeChild(container);
    }else if(obj.classList.contains("input-checkbox")){
        let buttonContainer=obj.parentNode;
        let container=buttonContainer.parentNode;
        if(obj.checked===true){
          container.classList.add("border-animation");
         }
         else if(obj.checked===false){
                    container.classList.remove("border-animation");
        }
    }else if(obj.classList.contains("btn-edit")){
        let buttonContainer=obj.parentNode;
        let container=buttonContainer.parentNode;
        let title=container.firstElementChild;

        container.removeChild(container.firstElementChild);
        let containerChange=editInputCreate();
        let inputContainerChange=containerChange.firstElementChild;
        inputContainerChange.placeholder=title.textContent;
        container.insertBefore(containerChange,container.firstElementChild);
    
         obj.classList.add("save-btn");
         obj.textContent="Save";
         obj.classList.remove("btn-edit");

    }else if(obj.classList.contains("save-btn")){

        let buttonContainer=obj.parentNode;
        let container=buttonContainer.parentNode;

        let input =container.firstElementChild.firstElementChild;
       
        let head=document.createElement('h3');

        if(input.value!=""){
        head.textContent=input.value;
        }
        else{
            head.textContent=input.placeholder;
        }

        container.removeChild(container.firstElementChild);
        container.insertBefore(head,container.firstElementChild);

        obj.classList.add("btn-edit");
        obj.classList.remove("save-btn");
        obj.textContent="Edit";
  
    }
   
})

function editInputCreate(){
    let editDiv=document.createElement('div');
    editDiv.classList.add("edit-hover");
    let inputCreate=document.createElement('input');
    inputCreate.type='text';

    editDiv.appendChild(inputCreate);

    return editDiv;
   
}


