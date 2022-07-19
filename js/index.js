let currentDrawer = 0;

//--FUNCTION TO LOAD DESCRIPTIONS--//
async function loadDescription(outerMost, drawer, image){

    let artText = document.createElement("div");
    artText.className = 'artText';
    outerMost.appendChild(artText)

    let artTitle = document.createElement('p');
    artTitle.className = 'artTitle';
    artTitle.textContent = info[drawer][image][1];
    artText.appendChild(artTitle);

    let artDescription = document.createElement('p');
    artDescription.className = 'artDescription';
    artDescription.textContent = info[drawer][image][2];
    artText.appendChild(artDescription);

    let artPrice = document.createElement('p');
    artPrice.className = 'artPrice';

    switch(info[drawer][image][3]){
        case "-1":
            artPrice.textContent = "Sold";
            break;
        case "-2":
            artPrice.textContent = "Not for Sale";
            break;
        case "-3":
            artPrice.textContent = "Stolen";
            break;
        default:
            artPrice.textContent = `EURO ${info[drawer][image][3]},--`   ;
    }


    artText.appendChild(artPrice);
}



async function loadArtShowcase(){
    const mainContainer = document.getElementById("drawer");
    mainContainer.innerHTML = '';

    for(let i = 0; i<info[currentDrawer].length; i++){
        
        //-- CREATE ART SHOWCASE CONTAINER --//
        let outerMost = document.createElement("div");
        outerMost.className = (i%2 ? "artworkShowcase even":'artworkShowcase');
        
        //-- ADD IMAGE --//
        let image = document.createElement('img');
        image.className = 'art';
        let src = `img/art/${ids[currentDrawer]}/${info[currentDrawer][i][0]}.jpg`;
        image.src = src;
        outerMost.appendChild(image);
    
        //--ADD IMAGE DESCRIPTION--//
        loadDescription(outerMost, currentDrawer, i);
        outerMost.className += ' fadeInThing';
        mainContainer.appendChild(outerMost);
        
    }
}


async function setUpDrawerSelect(){
    const currentDrawerH1 = document.getElementById("drawerTitle");
    currentDrawerH1.textContent = `Drawer ${currentDrawer+1}`;

    let imagesStored = await fetch('img/art/directory.json');
    imagesStored = await imagesStored.json();
    imagesStored = imagesStored.imagesStored;

    const arrowForward = document.getElementById("arrowForward");
    arrowForward.addEventListener("click", () => {
        if(currentDrawer<imagesStored.length-1){
            currentDrawer++;
            loadArtShowcase();
            currentDrawerH1.textContent = `Drawer ${currentDrawer+1}`;
        }

        if(currentDrawer === imagesStored.length-1){
            arrowForward.style.opacity = '0%';
        }
        else{
            arrowForward.style.opacity = '100%';
            arrowBackward.style.opacity = '100%';
        }
        
    });


    const arrowBackward = document.getElementById("arrowBackward");
    arrowBackward.addEventListener("click", () => {
        if(currentDrawer>0){
            currentDrawer--;
            loadArtShowcase();
            currentDrawerH1.textContent = `Drawer ${currentDrawer+1}`;
        }
        if(currentDrawer === 0){
            arrowBackward.style.opacity = '0%';
        }
        else{
            arrowBackward.style.opacity = '100%';
            arrowForward.style.opacity = '100%';
        }
    });

    //-- Starting in the first drawer --//
    arrowBackward.style.opacity = '0%';
    //-- In case, only one drawer exists --//
    if(currentDrawer === imagesStored.length-1)
        arrowForward.style.opacity = '0%';
    
}

function main(){
    loadArtShowcase();
    setUpDrawerSelect();
}

document.addEventListener("DOMContentLoaded",main);


