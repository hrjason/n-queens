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
    var results = _.flatten(game);
    var sum = 0;
    for(var i=0; i < results; i++) {
      sum += results[i];
    };
    if(sum === max){
      solution.push(game);
    }
    //first row is finished
    for (var j=0; j < max; j++){
      var row = game.get(j);
      for(var i=0; i<max; i++) {
        if(!game.hasRowConflictAt(j)) {
          if(!game.hasColConflictAt(i)){
            row[i] = 1;
            recurse(game);
          }
        }
      }
    }
    /*
    for (var i = 0; i < max; i++){
      var row = board.get(i);
      for (var j =0; j< max; j++){
        if(!board.hasRowConflictAt(i) && !board.hasColConflictAt(j)){
          //console.log(row[j]);
          row[j]=1;
          solution.push(row);
        }
      }
    }
    */
  };
  recurse(board);
  // for(var i =0; i < max; i++){
  //   var row = board.get(i);
  //   row[i] = 1;
  //   solution.push(row);
  // }
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
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
