let currentDrawer = 0;

//--FUNCTION TO LOAD DESCRIPTIONS--//
async function loadDescription(outerMost, index){
    let res = await fetch(`img/art/${currentDrawer}/description.json`);
    res = await res.json();

    let artText = document.createElement("div");
    artText.className = 'artText';
    await outerMost.appendChild(artText)

    let artTitle = document.createElement('p');
    artTitle.className = 'artTitle';
    artTitle.textContent = res.info[index].name;
    await artText.appendChild(artTitle);

    let artDescription = document.createElement('p');
    artDescription.className = 'artDescription';
    artDescription.textContent = res.info[index].technical;
    await artText.appendChild(artDescription);

    let artPrice = document.createElement('p');
    artPrice.className = 'artPrice';
    artPrice.textContent = res.info[index].price;
    artText.appendChild(artPrice);
}



async function loadArtShowcase(){
    const mainContainer = document.getElementById("drawer");
    mainContainer.innerHTML = '';

    let imagesStored = await fetch('img/art/directory.json');
    imagesStored = await imagesStored.json();
    imagesStored = imagesStored.imagesStored;

    for(let i = 0; i<imagesStored[currentDrawer]; i++){
        
        //-- CREATE ART SHOWCASE CONTAINER --//
        let outerMost = document.createElement("div");
        outerMost.className = (i%2 ? "artworkShowcase even":'artworkShowcase');
        
        //-- ADD IMAGE --//
        let image = document.createElement('img');
        image.className = 'art';
        image.src = `img/art/${currentDrawer}/${i}.jpg`;
        await outerMost.appendChild(image);
    
        //--ADD IMAGE DESCRIPTION--//
        loadDescription(outerMost, i);
        outerMost.className += ' fadeInThing';
        await mainContainer.appendChild(outerMost);
        
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

main();