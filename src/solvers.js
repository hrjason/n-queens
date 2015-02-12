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
    // console.log('started recursion');
    // console.log(game.hasAnyColConflicts());
    //return;
    //get last row see if there's something in there;
    var full = false
    console.log('last row ' + game.get(max-1));
      var lastRow = game.get(max-1);
      console.log(_.reduce(lastRow, function (a, b){return a + b;}));
      full = _.reduce(lastRow, function (a, b){return a + b;}) > 0;

    //see if the game is complete
    //check for any conflicts
    if(!game.hasAnyColConflicts() && !game.hasAnyRowConflicts() && full){
      //calculate total game pieces.
      var sum = 0;
      console.log('testing solution');
      for (var m=0; m< max; m++){
        gameRow =game.get(m);
        for(var p=0; p< max; p++){
          sum +=gameRow[p];
        }

      }
      console.log(sum);
      //if we have enough game pieces push to solutions.
      if (sum===max){
        console.log("solution found");
        solution.push(game);
        return;
      }
    } else {
      return;
    }
    //console.log('before for loops');
    for (var i=0; i < max; i++) {
      // console.log('first for loop');
      //check row for game piece.
      if (_.reduce(game.get(i), function (a, b){return a + b;}) === 0){
        for (var j = 0; j < max; j++){
          // console.log('second for loop');
          game.togglePiece(j, i);
          if(!game.hasAnyColConflicts() && !game.hasAnyRowConflicts()){
            return recurse(game);
          }
          game.togglePiece(j, i);
        }
      }
    }

  };

  recurse(board);
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
