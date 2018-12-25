'use strict';
const state = (function(){  
  const board =[
    // position : 0 == X
    // position : 1 == O
    { position : 0,
      played : null,
      winner: false },
    { position : 1,
      played : null,
      winner: false } ,
    { position : 2,
      played : null,
      winner: false },
    { position : 3,
      played : null, 
      winner: false},
    { position : 4,
      played : null,
      winner: false },
    { position : 5,
      played : null,
      winner: false },
    { position : 6,
      played : null,
      winner: false },
    { position : 7,
      played : null,
      winner: false },
    { position : 8,
      played : null,
      winner: false },
  ];

  const findByPosition  = function(num) {
    for(let i = 0; i < state.board.length; i ++){
      const square = state.board[i];
      if(square.position === Number(num)){
        return square;
      }
    }
  };
 
  const toggleTurn = function(){
    state.turn = !state.turn;
  };
  
  const updateSquare = function(num){
    if(state.winner !== true){
      const square = findByPosition(num);
      if(square.played === null && state.turn === true){
        square.played = 0;
        toggleTurn();
      }
      if(square.played === null && state.turn === false){
        square.played = 1;
        toggleTurn();
      }
      if (square.played !== null){
        return;
      // perhaps logg an error that times out after 
      // a few seconds. that would be cool.
      } 
    }
  };

  const resetBoard = function(){
    this.turn = true;
    this.winner = false;
    this.board.map(square => {
      square.played = null;
      square.winner = null;});
  };
 
  return{
    board,
    turn : true, // true is 'x', false is 'o'
    winner : false,
    
    toggleTurn,
    updateSquare,
    resetBoard,
 
  };
  
})();