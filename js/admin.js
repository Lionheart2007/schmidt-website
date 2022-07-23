let currentlySelected = null;

function setUpDrawerList(){
    let list = document.createElement('ul');
    list.id = 'drawersList';

    for(let i = 0; i < drawers.length; i++){
        let listItem = document.createElement('li');

        let numberAndName = document.createElement('div');
        numberAndName.className = 'numberAndName';
        let text = document.createElement('p');
        text.className = "drawerName";
        text.textContent = `Drawer ${i+1}`;

        numberAndName.appendChild(text);
        let description = document.createElement('p');
        description.textContent = drawers[i][1];
        numberAndName.appendChild(description);
        listItem.appendChild(numberAndName);

        let forButtons = document.createElement('div');

        let selectButton = document.createElement('button');
        selectButton.className = "deleteButton";
        selectButton.textContent = "Select";
        selectButton.onclick = (()=>updateDrawerSelect(listItem, i));

        forButtons.appendChild(selectButton);

        let deleteButton = document.createElement('button');
        deleteButton.className = "deleteButton";
        deleteButton.textContent = "Delete";
        deleteButton.onclick = (()=>deleteDrawer(drawers[i][0]));
        forButtons.appendChild( deleteButton);

        listItem.appendChild(forButtons);

        list.appendChild(listItem);

    }

    let container = document.getElementById('drawerList'); 
    container.appendChild(list);
}

function updateDrawerSelect(selected, i){
    let children = (document.getElementById('drawersList')).children;
    currentlySelected = drawers[i];

    for(let child = 0; child < children.length; child++)
        children[child].className = '';
    
    selected.className = 'selected';

    refreshImageList(i);
}

function refreshImageList(index) { 
    let list = document.createElement('ul');
    let imagesOfDrawer = images[index];
    let listGoesHere = document.getElementById('listGoesHere');
    listGoesHere.innerHTML = '';

    for(let i = 0; i < imagesOfDrawer.length; i++){
        let listItem = document.createElement('li');
        

        let text = document.createElement('div');
        
        let title = document.createElement('p');
        title.textContent = imagesOfDrawer[i][1];
        text.appendChild(title);

        let technique = document.createElement('p');
        technique.textContent = imagesOfDrawer[i][2];
        text.appendChild(technique);

        let price = document.createElement('p');
        let stringToUse;
        switch(imagesOfDrawer[i][3]){
            case('-1'):
                stringToUse = "Sold";
                break;
            case("-2"):
                stringToUse = "Price on Application";
                break; 
            case("-3"):{
                stringToUse = "Not for Sale";
                break;
            }
            case('-4'):{
                stringToUse = "Stolen";
                break;
            }
            default: {
                stringToUse = `EURO ${imagesOfDrawer[i][3]},--`; 
            }
        }
        price.textContent = stringToUse;
        text.appendChild(price); 

        listItem.appendChild(text);
        list.appendChild(listItem);
    }

    listGoesHere.appendChild(list);
    
    
}

async function deleteDrawer(drawerToDelete){
    console.log("Hm")
    let data = new FormData;
    data.append('drawerToDelete', drawerToDelete);
    await fetch("/config/deleteDrawer.php", {method:"POST", body: data})
    .then(response => response.text())
    .then(response => console.log(response));

    location.reload(true);
    
}

function main(){ 
    setUpDrawerList();
}



document.addEventListener('DOMContentLoaded', main);