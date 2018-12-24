'use strict';
/* global app $ state */
const app = (function (){
  // State modification functions
  function generateSquare(square){
    // if square.winner === true , 
    // give it the class ofwinner from ccsss
    if(square.played === 0 && square.winner === true){
      return `<div class="cell win" id="${square.position}">
                <p> X </p>
                </div>`;
    }
    if(square.played === 1 && square.winner === true){
      return `<div class="cell win" id="${square.position}">
                 <p> O </p>
                  </div>`;
    } 
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
  // board[0].played === board[1].played && board[1].played === board[2].played
  function checkForWinner(){
    console.log('checkforwinner ran');
    const board =state.board;
    if (board[0].played === board[1].played === board[2].played
      && board[2].played !== null ){
        console.log('winner', state.winner);
      board[0].winner = true;
      board[1].winner = true;
      board[2].winner = true; }
    if (board[3].played === board[4].played === board[5].played
      && board[5].played !== null ){
      board[3].winner = true;
      board[4].winner = true;
      board[5].winner = true; }  
    if (board[0].played === board[3].played === board[6].played
      && board[6].played !== null ){
      board[0].winner = true;
      board[3].winner = true;
      board[6].winner = true; }
    if (board[1].played === board[4].played === board[7].played
        && board[7].played !== null ){
      board[1].winner = true;
      board[4].winner = true;
      board[7].winner = true; }        
    if (board[2].played === board[5].played === board[8].played
      && board[5].played !== null ){
      board[2].winner = true;
      board[5].winner = true;
      board[8].winner = true; }
    if (board[0].played === board[4].played === board[8].played
      && board[8].played !== null ){
      board[0].winner = true;
      board[4].winner = true;
      board[8].winner = true; }   
    if (board[2].played === board[4].played === board[6].played
      && board[6].played !== null ){
      board[2].winner = true;
      board[4].winner = true;
      board[6].winner = true; }   
    if (board[6].played === board[7].played === board[8].played
      && board[8].played !== null ){
      board[6].winner = true;
      board[7].winner = true;
      board[8].winner = true; } 
    else return false;  
  }


  function renderBoard() {
    console.log ('render ran');
   const winnerCheck = checkForWinner();
    if(winnerCheck !==false){
      state.winner = true;
    }
    const board =state.board;
    const boardHtml = generateBoardString(board);
    $('.board').html(boardHtml);
  }

  function handleClickedSquare(){
    $('.board').on('click', '.cell', (event) => {
      const position = $(event.currentTarget).attr('id'); 
      state.updateSquare(position);
      renderBoard();
    });
  }
  function handleNewGame() {
    $('.controls').on('click', '#new-game', () => {
      state.resetBoard();
      renderBoard();
    });
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