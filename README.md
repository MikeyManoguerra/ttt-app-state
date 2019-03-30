![Screenshot](/../screenshots/images/ttt-image.png?raw=true)

# Learning Application State - with Tic Tac Toe!

This is an exercise for learning how to manage application state with the classic
Tic Tac Toe game. Complete the instructions below, then check your solution against
the example solution in the `gh-pages` [branch](https://github.com/MrSkinny/ttt-app-state/tree/gh-pages) on this repo. [Click Here](https://mrskinny.github.io/ttt-app-state) to
see the working app and target functionality.

## Objectives:

Build out your `app.js` to fulfill the following user stories. No edits are required in any other file.

* Upon loading, I can immediately click cells to alternately place Xs and Os on each click
* I cannot change a cell after it has a value inside it
* I can see when a winning line has been created
  * No further moves can be played from this point
* I can click "New Game" at any time to reset the board

## Instructions

1. Fork this repo and clone it down to your local machine
2. Start a new branch called `implement-game`
3. Study the `index.html`. The only dynamic part of the app will be happening inside the `<div class="board"></div>` element.
4. Build a state object that can handle every possible scenario as a user interacts with the app
5. Write state modification functions for every action a user can make in the app
    * Start new game
    * Click a cell 
6. Write a `renderBoard` function that reads the global `state` object and renders all the HTML necessary to draw the Tic Tac Toe grid
7. Write event listeners for the two user actions. Each listener should:
    1. retrieve DOM info if applicable (e.g. which cell was clicked?)
    2. invoke a state modification function
    3. invoke the render function

------
