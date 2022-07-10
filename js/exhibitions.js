

async function loadImagesAndDescriptions(){
    let res = await fetch('/img/exhibitions/description.json');
    res = await res.json();
    

    const mainContainer = document.getElementById("mainContainer");
    
    const body = document.getElementsByTagName('body');
    body.className = 'artworkShowcase';

    for(let i = 0; i < res.numberOfExhibitions; i++){
        let exhibitionShowcase = document.createElement("div");
        exhibitionShowcase.className = "artworkShowcase";

        let image = document.createElement("img");
        image.src = `/img/exhibitions/${i}.jpg`;

        exhibitionShowcase.appendChild(image);
        

        let description = document.createElement("div");
        description.className = 'exhibitionText';

        description.textContent = res.exhibitions[i].text;
        exhibitionShowcase.appendChild(description);


        mainContainer.appendChild(exhibitionShowcase);
        
    }
}


function main(){
    loadImagesAndDescriptions();
}

main();