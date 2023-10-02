function makeGrid(size){
    let board = document.querySelector(".board");
    let boxes = board.querySelectorAll("div");
    boxes.forEach((div) => div.remove())
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for ( let i=0 ; i< size*size ; i++){
        let box = document.createElement('div');
        box.addEventListener("mouseover",changeColor)
        box.style.backgroundColor = ' white';
        board.insertAdjacentElement('beforeend',box)
    }
 
}

function changeSize(size){
    if (size>=4 && size <= 100){
        makeGrid(size)
    }else{
        alert("Please ensure your input is between 4 and 100")
    }
}

function changeColor(e){
    this.style.backgroundColor="black"
}


makeGrid(16)


