console.log("Welcome to tic tac toe")
let turn = "X"
let gameover = false
let music = new Audio('ting.mp3');
//function to change turn
let winmusic = new Audio('music.mp3')
const changeTurn = function() {
    return turn === "X" ? "0": "X"
}

// function to check win
const checkWin = function() {
   let txt =  document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2,0,4.7,0],
        [3,4,5,0,14.8,0],
        [6,7,8,0,25,0],
        [0,3,6,-10,15,90],
        [1,4,7,0,15,90],
        [2,5,8,10,15,90],
        [0,4,8,0,15,45],
        [2,4,6,0,15,135],
    ]
    wins.forEach (e => {
      if((txt[e[0]].innerText === txt[e[1]].innerText) && (txt[e[2]].innerText === txt[e[1]].innerText) && (txt[e[0]].innerText !== "") ){
        document.querySelector('.info').innerText = txt[e[0]].innerText + " won"
        gameover = true
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.opacity = '1';
        document.querySelector('.imgbox').getElementsByTagName('p')[0].style.fontSize = '50px';
        winmusic.play();
        document.querySelector('.line').style.width = '30vw';
        document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
      }
    })
}

//game logic start
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', function() {
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
          turn =  changeTurn();
            checkWin();
            music.play();
            if(!gameover) {
                document.getElementsByClassName('info')[0].innerText = "turn for"+ " " + turn;
            }
        }
    })
})

function nav() {
    let boxtext = document.querySelectorAll('.boxtext');
Array.from(boxtext).forEach(element => {
    element.innerText = "";
    winmusic.pause();
})
turn = "X";
document.getElementsByClassName('info')[0].innerText = "turn for"+ " " + turn;
document.querySelector('.imgbox').getElementsByTagName('img')[0].style.opacity = '0';
document.querySelector('.imgbox').getElementsByTagName('p')[0].style.fontSize = '0px';
document.querySelector('.line').style.width = '0vw';
}