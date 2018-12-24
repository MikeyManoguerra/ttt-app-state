'use strict';
const state = (function(){  

  const findByPosition  = function(num) {
    console.log(num);
    for(let square in this.board) {
      console.log(square);
      if(square.positon === num){
        console.log(square);
        return square;
      }
    }
  };
 
  const toggleTurn = function(){
    state.turn = !state.turn;
  };
  
  const updateSquare = function(num){
    const square = findByPosition(num);
    if(square.played === null && this.turn === true){
      square.played = 0;
      toggleTurn();
    }
    if(square.played === null && this. turn === false){
      square.played = 1;
      toggleTurn();
    }
    if (square.played !== null){
      return;
      // perhaps logg an error that times out after 
      // a few seconds. that would be cool.
    }
   


  };
 
  const board =[
    // position : 0 == X
    // position : 1 == O
    { position : 0,
      played : null },
    { position : 1,
      played : null },
    { position : 2,
      played : null },
    { position : 3,
      played : null },
    { position : 4,
      played : null },
    { position : 5,
      played : null },
    { position : 6,
      played : null },
    { position : 7,
      played : null },
    { position : 8,
      played : null },
    
  ];

  return{
    board,
    turn : true, // true is 'x', false is 'o'
    winner : false,
    
    toggleTurn,
    updateSquare,
 
  };
  
})();