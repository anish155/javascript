function Board_Display(){
    const board=document.querySelector(".container");
    for( let i=0;i<64;i++){
        const square = document.createElement('button');
        square.classList.add('square');
        board.appendChild(square);
    }
}

Board_Display();