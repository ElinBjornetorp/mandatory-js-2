
$(".box").css({display: "flex", justifyContent: "center", alignItems: "center"});

let xTurn = true;

function compareAllValues(array) {
  for(let i = 0; i < array.length; i++) {
    let value = array[i];

    //Om värdet är undefined, gå ur loopen genast och returnera "false"
    if(value === undefined) {
      console.log("One or more values are undefined");
      return false;
    }

    //Jämför det aktuella värdet med föregående värde
    //Avslutar loopen och returnerar false om de är olika
    for(let j = 0; j < i; j++){
      let previousValue = array[j];
      if(value !== previousValue) {
        console.log("Not matching");
        return false;
      }
    }

    //Annars - returnera true!
    console.log("Returning true!");
    return true;
} //End of function compareAllValues

function onClick(e) {
  let selectedBox = $(e.target);

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

  //Kollar om det är tre i rad

} //End of function onClick

//Event listener
$(".box").on("click", onClick);
