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
    const htmlArray = board.map(square =>{
      return generateSquare(square);
    });
    const htmlString = '';
    return htmlString.concat(htmlArray);
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
    //  have to render board with rows  <div class="row">
    
  }


  // Render functions
  function bindEventListeners(){
 

  }

  return{
    renderBoard,
    bindEventListeners,
  };


  // Event Listeners
}());