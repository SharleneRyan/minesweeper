document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!

var board = {
  cells:[
    {
       row: 0,col: 0, isMine:false ,isMarked:false, hidden:true ,surroundingMines:1 
    },
    {
      row: 0, col: 1, isMine:false  ,isMarked:false, hidden:true ,surroundingMines:2 
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
 
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
    lib.displayMessage('You win!')
}

  // Define this function to count the number of mines around the cell
    // (there could be as many as 8). You don't have to get the surrounding
  // cells yourself! Just use `lib.getSurroundingCells`: 

var surrounding = lib.getSurroundingCells(cells.row, cells.col);
var surroundingCells = getSuroundingcells(row,col);

// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.

function countSurroundingMines (cell) {

}
  










function newGame() {
  getFieldParams();
  if (rows * cols - (mineCount + 9) < 0) {
    alert('Not enough space for ' + mineCount + ' mines on the field.');
    gameEnded = true;
    return;
  }
}