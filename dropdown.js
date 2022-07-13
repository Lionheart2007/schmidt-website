let dropdownOpen = false;

if(window.innerHeight > window.innerWidth){
    createDropdown();
}else{
    createNavbar();
}

let portrait = window.matchMedia("(orientation: portrait)");
portrait.addEventListener("change", (e) => {
    if(e.matches){
        //Portrait mode
        removeNavbar();
        createDropdown();
    } else {
        //Landscape mode
        removeDropdown();
        createNavbar();
    }
});

function createDropdown(){
    let dropdownContainer = document.createElement("div");
    dropdownContainer.id = "dropdownContainer";

    let header = document.getElementsByTagName("header");
    header = header[0];
    header.appendChild(dropdownContainer);

    dropdownContainer.addEventListener("click", openDropdown);
}

function openDropdown() {
    createNavbar();
    dropdownOpen = true;
    dropdownContainer.remove();
    let undrop = document.createElement("div");
    undrop.id = "undrop";
    (document.getElementById("headerContainer")).appendChild(undrop);
    undrop.addEventListener("click", closeDropdown);
}

function closeDropdown() {
    removeNavbar();
    dropdownOpen = false;
    let undrop = document.getElementById("undrop");
    undrop.remove();

    let dropdownContainer = document.createElement("div");
    dropdownContainer.id = "dropdownContainer";
    dropdownContainer.addEventListener("click",openDropdown);
   (document.getElementById("headerContainer")).appendChild(dropdownContainer);
}


function removeDropdown(){
    if(dropdownOpen) closeDropdown();
    
    let toRemove = document.getElementById("dropdownContainer");
    toRemove.remove();
    
}

function createNavbar(){
    const toAdd = document.createElement("nav");
    const ul = document.createElement("ul");
    ul.id = "topNavbar";

    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = "index.html";
    a.textContent = "Drawers";

    li.appendChild(a);
    ul.appendChild(li);

    li = document.createElement("li");
    a = document.createElement("a");
    a.href = "exhibitions.html";
    a.textContent = "Exhibitions";

    li.appendChild(a);
    ul.appendChild(li);

    li = document.createElement("li");
    a = document.createElement("a");
    a.href = "biography.html";
    a.textContent = "Biography";

    li.appendChild(a);
    ul.appendChild(li);

    li = document.createElement("li");
    a = document.createElement("a");
    a.href = "contact.html";
    a.textContent = "Contact";

    li.appendChild(a);
    ul.appendChild(li);

    toAdd.appendChild(ul);

    let addTo = document.getElementById("headerContainer");
    addTo.appendChild(toAdd);
}

function removeNavbar(){
    let toRemove = document.getElementById("topNavbar");
    toRemove.remove();
}



