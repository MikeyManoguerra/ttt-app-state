'use strict';
/* global app $ state */
const app = (function (){
  // State modification functions
  function generateSquare(square){
    if(square.played === 0){
      return `<div class="cell" id="${square.position}">
                <p> X </p>
                </div>`;
    }
    if(square.played === 1){
      return `<div class="cell" id="${square.position}">
                 <p> O </p>
                  </div>`;
    } 
    if(square.played === null){
      return `<div class="cell" id="${square.position}">
                <p> &nbsp; </p>
                </div>`; 
    }
  }
  
  function generateBoardString(board){
    const htmlArray = board.map(square => generateSquare(square));
    const row = '<div class="row">';
    htmlArray.splice(6,0,row);
    htmlArray.splice(3,0,row);
    htmlArray.splice(0,0,row);
    return htmlArray.join('');
  }

  function checkForWinner(){
    //  a bunch of or statements
  }


  function renderBoard() {
    console.log ('render ran');
    if(state.winner === true){
      // run winner state, somehow
    } 
    const board =state.board;
    const boardHtml = generateBoardString(board);
    console.log(boardHtml);
    $('.board').html(boardHtml);
  }

  function handleClickedSquare(){
    // target the clicked item, 
    $('.board').on('click', '.cell', (event) => {
      console.log(event.currentTarget());
      // retrieve the iD
      const position = $(this).attr('id').val();
      console.log(typeof position);
      //  pass that to state module      
      state.updateSquare(position);
      renderBoard();
    });
  }
  function handleNewGame() {
    // new game button clicked, reset board 
  }

  function bindEventListeners(){
    handleClickedSquare();
    handleNewGame();

  }

  return{
    renderBoard,
    bindEventListeners,
  };


  // Event Listeners
}());