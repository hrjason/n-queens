/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {

  var solution = [];
  var board = new Board ({'n' : n});
  var max = board.get('n');
  var recurse = function (game){
    if (game.length===max){
      solution.push(game);
      return;
    }
    for (var i = 0; i < max; i++){
      if (!this.hasAnyRooksConflicts){
        board.togglePiece(i,i);
        test = board.get(i);
        recurse(game.concat(test));
      }
    }

  };
  recurse([]);
  return solution;

};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var counter = 0;
  var board = new Board({'n':n});
  var max = board.get('n');
  var recurse = function(rowIndex){
    if (rowIndex === max){
      counter+=1;
      return;
      }
    for (var i = 0; i < max; i++){
      board.togglePiece(rowIndex, i);
      if (!board.hasRowConflictAt(rowIndex) && !board.hasColConflictAt(i)){
        recurse(rowIndex+1);
      }
      board.togglePiece(rowIndex, i);
    }
  };
  recurse(0);
  return counter;
};

////////////////////

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  var solutions;
  var board = new Board({'n':n});
  var max = board.get('n');

  var recurse = function(rowIndex){

    if (rowIndex === max){
      for( var k = 0; k<max; k++){
        for(var l = 0; l<max; l++){
          solutions[k][l]=board[l];

        }
      }


      return;
    }
    for (var i = 0; i < max; i++){
      board.togglePiece(rowIndex, i);
      if (!board.hasAnyQueensConflicts()){
        recurse(rowIndex+1);
      }
      board.togglePiece(rowIndex, i);
    }
  };
  recurse(0);
  return solutions;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var counter = 0;
  var board = new Board({'n':n});
  var max = board.get('n');
  var recurse = function(rowIndex){
    if (rowIndex === max){
      counter+=1;
      return;
      }
    for (var i = 0; i < max; i++){
      board.togglePiece(rowIndex, i);
      if (!board.hasAnyQueenConflictsOn(rowIndex, i)){
        recurse(rowIndex+1);
      }
      board.togglePiece(rowIndex, i);
    }
  };
  recurse(0);
  return counter;
};
