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
  //construct matrix
    //make a row
      //fill in a value
      //loop through size of n
        //use first tests
          //place 1 in row slot, if passes
      //
  //construct the matrix
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
  var solution = [];
  var board = new Board ({'n' : n});
  var max = board.get('n');
  var recurse = function (game){
    //console.log(game);
    if(!game.hasAnyColConflicts && !game.hasAnyRowConflicts){
      var total = _.flatten(game);
      var count = 0;
      for (var k = 0; k< total.length; k++){
        count +=total[k];
      }
      if (count === max){
        solution.push(game);
        return;
      }
    }
    for (var i=0; i < max; i++) {
      for (var j = 0; j < max; j++){
        game[j][i]=1; // toggle(0, 0);
        if (!game.hasAnyColConflicts && !game.hasAnyRowConflicts){
          //game.togglePiece(j,i);
          //test = game.get(j);
          return recurse(game);
          //recurse(board);
        }
        game[j][i]=0;
      }
    }

  };
  var obj = []
  for (var m = 0; m < max; m++){
    obj.push(board.get(m));
  }
  recurse(obj);
  //console.log("recursion runs" + counter);
  //console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solution.length;
};

////////////////////

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
