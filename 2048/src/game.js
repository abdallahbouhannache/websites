"use strict";
var matrix = [['', '', '', '']
    , ['', '', '', '']
    , ['', '', '', '']
    , ['', '', '', '']];

let cels = document.querySelectorAll('.cellule');
let scoreP = document.querySelector('.score');
let newgame = document.querySelector('.newPlay');



newgame.onclick = () => {
    randomHsl = '#' + Math.random().toString(16).substr(-6);
    document.documentElement.style.setProperty('--bgcolor', randomHsl);
    matrix = [['', '', '', '']
        , ['', '', '', '']
        , ['', '', '', '']
        , ['', '', '', '']];
    addedCells = 0;
    istrue = true;
    score = 0;
    x = 0, y = 0;
     
    initPlan();
}

var randomHsl = '#' + Math.random().toString(16).substr(-6);
let celsVals = new Array(16);


var leftPos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var addedCells = 0;
let istrue = true;
let score = 0;
var x = 0, y = 0;



//dump the matrix of values intos the gameplan
function fillData() {
    let count = -1;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            cels[count += 1].innerHTML = matrix[i][j];

            if (matrix[i][j]) {
                cels[count].classList.add('celstyle');
            } else {
                cels[count].classList.remove('celstyle');
            }

        }

    }
    scoreP.value = score;
}
//initialiser le plan du jeu
function initPlan() {
    x = Math.floor((Math.random() * 16));
    y = Math.floor((Math.random() * 16));
    let [l, h] = [Math.floor((Math.random() * 4)), Math.floor((Math.random() * 4))]
    matrix[l][h] = x;
    matrix[h][l] = y;
    addedCells++;

    fillData();

}
//get a random number for the cell postitions
function getRandomAr(max, min) {
    return Math.floor((Math.random() * (max - min) + min))
}

//insert a new cell 
function insertCell(val) {


    if (addedCells < 10) {
        let i = Math.floor((Math.random() * 4));
        let j = Math.floor((Math.random() * 4));

        while (matrix[i][j] !== "") {
            i = Math.floor((Math.random() * 4))
            j = Math.floor((Math.random() * 4))
        }
        matrix[i][j] = val;
        addedCells++;
        fillData();

    }

}



function swapLeft() {
    //left Sliding
    for (let alpha = 0; alpha < 4; alpha++) {
        for (let i = 0; i < 4; i++) {
            for (let j = 1; j < 4; j++) {

                if (matrix[i][j - 1] === "") {
                    matrix[i][j - 1] = matrix[i][j];
                    matrix[i][j] = "";
                } else if (matrix[i][j - 1] === matrix[i][j]) {
                    matrix[i][j - 1] = matrix[i][j] * 2;
                    score += matrix[i][j - 1];
                    matrix[i][j] = "";
                }
            }
        }
    }
}

function swapRight() {
    //right Sliding


    for (let alpha = 0; alpha < 4; alpha++) {
        for (let i = 0; i < 4; i++) {
            for (let j = 3; j > 0; j--) {

                if (matrix[i][j] === "") {
                    matrix[i][j] = matrix[i][j - 1];
                    matrix[i][j - 1] = "";
                } else if (matrix[i][j - 1] === matrix[i][j]) {
                    matrix[i][j] = matrix[i][j] * 2;
                    score += matrix[i][j];

                    matrix[i][j] = "";
                }
            }
        }
    }
}
function swapUp() {
    //up Sliding

    for (let alpha = 0; alpha < 4; alpha++) {
        for (let j = 0; j < 4; j++) {
            for (let i = 1; i < 4; i++) {

                if (matrix[i - 1][j] === "") {
                    matrix[i - 1][j] = matrix[i][j];
                    matrix[i][j] = "";
                } else if (matrix[i - 1][j] === matrix[i][j]) {
                    matrix[i - 1][j] = matrix[i][j] * 2;
                    score += matrix[i - 1][j];

                    matrix[i][j] = "";
                }
            }
        }
    }
}
function swapDown() {
    //Down Sliding
    for (let alpha = 0; alpha < 4; alpha++) {
        for (let j = 0; j < 4; j++) {
            for (let i = 3; i > 0; i--) {

                if (matrix[i][j] === "") {
                    matrix[i][j] = matrix[i - 1][j];
                    matrix[i - 1][j] = "";
                } else if (matrix[i - 1][j] === matrix[i][j]) {
                    matrix[i][j] = matrix[i][j] * 2;
                    score += matrix[i][j];

                    matrix[i][j] = "";
                }
            }
        }
    }
}

function makeMove(key) {

    switch (key) {
        case 37: //arrowLeft
            swapLeft();
            break;
        case 38: //arrowUP
            swapUp();
            break;
        case 39: //arrowRight
            swapRight();
            break;
        case 40: //arrowDown
            swapDown();
            break;

        default:
            break;
    }


    /*let l = 0, end = 0; for (let i = 1; i < 16; i++) {
        l = i;
        end = i - 3;
        if (end < 3) { end = 0 };
            while(l>end){
            if (matrix[l-1]== "") {
            matrix[l-1] = matrix[l];
            if(matrix[l]!=""){
                matrix[l] = "";
                console.log('done')
            }
                }
                l--;
                }
            else if(matrix[i-1] == matrix[i]){
                      matrix[i-1] = matrix[i] + matrix[i];
                      matrix[i] = "";                      
                  } 
        
    }
    */

    fillData();

    insertCell(Math.floor((Math.random() * 16)));
    /*      if (addedCells.length < 16) {
            console.log('new cell added')
        } */
}



/* cels.forEach(e=>{e.innerHTML=matrix[]}) */

document.onkeydown = function (e) {
    let temp = null;
    switch (e.keyCode) {
        case 37://arrowLeft
            console.log('left arrow')
            makeMove(37);

            break;
        case 38://arrowUP
            console.log('up arrow')
            makeMove(38);

            /* insertCell(Math.floor((Math.random() * 16))); */
            break;
        case 39://arrowRight
            console.log('right arrow')
            makeMove(39);

            /* insertCell(Math.floor((Math.random() * 16))); */
            break;
        case 40://arrowDown
            console.log('down arrow')
            makeMove(40);

            /* insertCell(Math.floor((Math.random() * 16))); */
            break;
    }
}


window.onload = () => { initPlan() }
