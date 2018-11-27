
let xTurn = true;
let count = 0;

// ------------------------------------------------------------

function compareAllValues(array) {
  for(let i = 0; i < array.length; i++) {
    let value = array[i];

    //Om värdet är undefined, gå ur loopen genast och returnera "false"
    if(value === undefined) {
      return false;
    }

    //Jämför det aktuella värdet med föregående värde
    //Avslutar loopen och returnerar false om de är olika
    for(let j = 0; j < i; j++){
      let previousValue = array[j];
      if(value !== previousValue) {
        return false;
      }
    } //End of inner for-loop
  } //End of for-loop

  //Annars - returnera true!
  return true;

} //End of function compareAllValues

// --------------------------------------------------------------------

function endOfGame(winningSymbol) {

  //Kolla om något argument har skickats med
  //Om inget argument har skickats med, utgå ifrån att det blev oavgjort
  if(winningSymbol === undefined) {
    $("p").html("It's a tie!");
  }
  //Om argumentet är fas fa-times, så vann spelare 1
  else if(winningSymbol === "fas fa-times") {
    $("p").html("Player 1 won!");
  }
  //Annars vann spelare 2
  else {
    $("p").html("Player 2 won!");
  }

  //Skapa en reset-knapp
  $("body").append("<button>Play again</button>");
  $("button").on("click", onClickReset);
  $("button").focus();

  //Gör så att man inte kan fortsätta spela
  $(".box").off("click");
}

// --------------------------------------------------------------------

function onClickReset(e) {
  //Ta bort symbolerna, meddelandet och knappen
  $(".box i").remove();
  $("p").html("");
  $("button").remove();

  //Återställer xTurn och count
  xTurn = true;
  count = 0;

  //Börjar lyssna på boxarna igen
  $(".box").on("click", onClick);

} //End of reset function

// --------------------------------------------------------------------

function onClick(e) {
  let selectedBox = $(e.target);

  //Ökar count med 1
  count++;

  //Skapar ett kryss varannan gång, en cirkel varannan gång
  if(xTurn) {
    let cross = $("<i class='fas fa-times'></i>");
    $(selectedBox).append(cross);
    cross.css("font-size", "50px");
    xTurn = false; //Ej längre X:s tur
  }
  else {
    let circle = $("<i class='far fa-circle'></i>");
    $(selectedBox).append(circle);
    circle.css("font-size", "50px");
    xTurn = true; //X:s tur
  }

  //Slutar lyssna på rutan
  selectedBox.off("click");

  //Letar upp symbolen i varje ruta
  let symbol1 = $("#box1 i").attr("class"); // = Symbolen i ruta 1, etc...
  let symbol2 = $("#box2 i").attr("class");
  let symbol3 = $("#box3 i").attr("class");
  let symbol4 = $("#box4 i").attr("class");
  let symbol5 = $("#box5 i").attr("class");
  let symbol6 = $("#box6 i").attr("class");
  let symbol7 = $("#box7 i").attr("class");
  let symbol8 = $("#box8 i").attr("class");
  let symbol9 = $("#box9 i").attr("class");

  //Kollar om det är tre i rad, sedan om det blev oavgjort
  //Avslutar i så fall spelomgången
  if(compareAllValues([symbol1, symbol2, symbol3])) {
    endOfGame(symbol1);
  }
  else if(compareAllValues([symbol4, symbol5, symbol6])) {
    endOfGame(symbol4);
  }
  else if(compareAllValues([symbol7, symbol8, symbol9])) {
    endOfGame(symbol7);
  }
  else if(compareAllValues([symbol1, symbol4, symbol7])) {
    endOfGame(symbol1);
  }
  else if(compareAllValues([symbol2, symbol5, symbol8])) {
    endOfGame(symbol2);
  }
  else if(compareAllValues([symbol3, symbol6, symbol9])) {
    endOfGame(symbol3);
  }
  else if(compareAllValues([symbol1, symbol5, symbol9])) {
    endOfGame(symbol1);
  }
  else if(compareAllValues([symbol3, symbol5, symbol7])) {
    endOfGame(symbol3);
  }
  else if(count > 8) { //Om det blev oavgjort
    endOfGame();
  }
} //End of function onClick

// --------------------------------------------------------------------

//Event listener
$(".box").on("click", onClick);
