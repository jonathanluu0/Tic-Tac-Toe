$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  var count = 0;
  var winner = false;
  var numBoard = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ];
  function checkRows(){
    for(var i = 0; i<numBoard.length; i++){
      if(numBoard[i][0] === "X" && numBoard[i][1] === "X" && numBoard[i][2] === "X"){
        gameFinish();
      }
      if(numBoard[i][0] === "O" && numBoard[i][1] === "O" && numBoard[i][2] === "O"){
        gameFinish();
      }
    }
  }

  function checkCols(){
    for(var i = 0; i< numBoard[0].length; i++){
      if(numBoard[0][i] === "X" && numBoard[1][i] === "X" && numBoard[2][i] === "X"){
        gameFinish();
      }
      if(numBoard[0][i] === "O" && numBoard[1][i] === "O" && numBoard[2][i] === "O"){
        gameFinish();
      }
    }
  }

  function checkDiagonals(){
    if(numBoard[0][0] == numBoard[1][1] && numBoard[2][2] == numBoard[1][1]){
      if(numBoard[1][1] == "X" || numBoard[1][1] == "O"){
        gameFinish();
      }
    }
    if(numBoard[2][0] == numBoard[1][1] && numBoard[0][2] == numBoard[1][1]){
      if(numBoard[1][1] == "X" || numBoard[1][1] == "O"){
        gameFinish();
      }
    }
  }

  function checkWinner(){
    checkRows();
    checkCols();
    checkDiagonals();
    }

  function gameFinish(){
    if(winner == false){
      setTimeout(function(){
        alert("You Win!");
        $('.box').unbind('click'); }, 5);
        winner = true;
    }
  }

function gameDraw(){
  if(count == 9 && winner == false){
    setTimeout(function(){
      alert("Draw, no one wins.");
      $('.box').unbind('click');  }, 5);
  }
}

  function gameStart(){
    $('.box').bind('click', function selectSquare(event){
      count++;
      if(count%2 == 1){
        var playerX = $(event.target).text("X");
        playerX.css("color", "white");
        playerX.css("text-shadow", "black");
        playerX.css("background-image", "url('light.png')");
        playerX.css("background-repeat", "no-repeat");
        playerX.css("background-size", "contain");
        playerX.css("height", "175px");
        playerX.css("width", "175px");
        for(var rowX = 0; rowX < numBoard.length; rowX++){
          for(var colX = 0; colX < numBoard[0].length; colX++){
            if(event.target.id == numBoard[rowX][colX]){
              numBoard[rowX][colX] = "X";
            }
          }
        }

        $(this).unbind('click');
        checkWinner();
        gameDraw();
      }

      if(count%2 == 0){
        var playerO = $(event.target).text("O"); //places text
        playerO.css("color", "white");
        playerO.css("text-shadow", "black");
        playerO.css("background-image", "url('light.png')");
        playerO.css("background-repeat", "no-repeat");
        playerO.css("background-size", "contain");
        playerO.css("height", "175px");
        playerO.css("width", "175px");
        for(var rowO = 0; rowO < numBoard.length; rowO++){
          for(var colO = 0; colO < numBoard[0].length; colO++){
            if(event.target.id == numBoard[rowO][colO]){
              numBoard[rowO][colO] = "O";
            }
          }
        }
        $(this).unbind('click');
        checkWinner();
        gameDraw();
      }
    });
  }

  $('#reset').click(function cleanBoard(){
    $('.box').text("");

    $('.box').unbind('click');
    count = 0;
    numBoard = [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ];
    $('.box').css("background-image", "");

    winner = false;
    gameStart();
  });

  gameStart(); //Start game first
});

// var element = $('#thing-to-append')
// $('#2').append(element)
