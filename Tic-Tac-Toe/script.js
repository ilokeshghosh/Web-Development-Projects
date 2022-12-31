console.log("Welcome to Tic Tac Toe");

let music = new Audio("music.mp3");
let turnMusic = new Audio("ting.mp3");
let game = new Audio("gameover.mp3");
let turn="X";

//Function to change the turn
const changeTurn =()=>{

    return turn==="X"?"0":"X";
}

//Function to check win
const checkWin =()=>{

}

//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = document.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ' '){
            boxtext.innerText = turn;
            changeTurn();
            turnMusic.play();
            checkWin();
            document.getElementsByClassName("turn")[0].innerText="Turn for "+ turn;
        }
    })
})