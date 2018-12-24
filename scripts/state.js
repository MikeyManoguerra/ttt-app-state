'use strict';
const state = (function(){  
 
  const toggleTurn = function(){
    state.turn = !state.turn;
  };
  
  const updateSquare = function(){
    // finds the square in board array, places a number 
    //  in that square, runs toggleTurn
  };
 
  const board =[
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