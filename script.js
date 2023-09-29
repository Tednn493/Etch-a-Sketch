const container = document.querySelector(".container");

function createGrid(rows,columns){
    total= rows * (columns + 1) + 1
    for (let c=0; c<total;c++){
        let box= document.createElement("div");
        box.className = "box";
        box.innerText = c
        container.appendChild(box);
    };
}

createGrid(16,16);