document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!

var board = {
  cells:[
    {
       row: 0,col: 0, isMine:false ,isMarked:false, hidden:true, surroundingMines:1 
    },
    {
      row: 0, col: 1, isMine:false  ,isMarked:false, hidden:true, surroundingMines:2 
    },
    {
      row: 0, col: 2, isMine: false , isMarked: false, hidden: true, surroundingMines: 2
    },
    { 
      row: 1, col: 0, isMine:false ,isMarked:false, hidden:true ,surroundingMines:3  
    },
    { 
      row: 1, col: 1, isMine:true ,isMarked:false, hidden:true ,surroundingMines:2 
    },
    {
      row: 1, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: 2
    },
    {
      row: 2, col: 0, isMine: true, isMarked: false, hidden: true, surroundingMines: 2
    },
    {
      row: 2, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: 2
    },
    {
      row: 2, col: 2, isMine: true, isMarked: false, hidden: true, surroundingMines: 2
    },
  ]
}



function startGame () {
  for (i = 0; i < board.cells.length; i++){
   countSurroundingMines(board.cells);
     }
   lib.initBoard()  
  

   document.addEventListener('click',checkForWin)
   document.addEventListener("contextmenu",checkForWin)
    }  
// Define this function to look for a win condition:
      
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?

function checkForWin () {
  for (i =0; i < board.cells.length; i++){
      if(cells[i].hidden){
      return 
      }
      if( board.cells[i].ismine ){
        if (!board.cell[i].isMarked){
        return  
      }
    } 
  }  

 function toDeclare (displayMessage){
 lib.displayMessage('You win!')
 alert('You Have Won!') 
}
     
 
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
    
}

  // Define this function to count the number of mines around the cell
    // (there could be as many as 8). You don't have to get the surrounding
  // cells yourself! Just use `lib.getSurroundingCells`: 

var surrounding = lib.getSurroundingCells(board.cells.row, board.cells.col);
var surroundingCells = getSuroundingcells(board.cells.row, board.cells.col);

// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.

function countSurroundingMines (cell) {
 // for (var i = 0; i < board.cells.length; i++) {
 //  for (var j = 0; j < board.cells.length; j++) {
}
function inbuilt(){
  
}
   


  function newGame() {
    getFieldParams();
    if (rows * cols - (mineCount + 9) < 0) {
      alert('Not enough space for ' + mineCount + ' mines on the field.');
      gameEnded = true;
      return;
    }
} 




setFieldParams(9, 9, 10);
newGame(rows, cols, mineCount);

var audio = document.getElementsByTagName("audio")[0];
audio.play();
function addSource(elem, path) {
  $('<source>').attr('src', path).appendTo(elem);
}

$("#speak").mouseenter(function () {
  var audio = $('<audio />', {
    autoPlay: 'autoplay'
  });
  addSource(audio, 'audio/' + Math.ceil(Math.random() * 5) + '.mp3');
  addSource(audio, 'audio/' + Math.ceil(Math.random() * 5) + '.ogg');
  audio.appendTo('body');
});


function newGame() {
  getFieldParams();
  if (rows * cols - (mineCount + 9) < 0) {
    alert('Not enough space for ' + mineCount + ' mines on the field.');
    gameEnded = true;
    return;
  }
}