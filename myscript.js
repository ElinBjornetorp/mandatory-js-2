
$(".box").css({display: "flex", justifyContent: "center", alignItems: "center"});

let xTurn = true;

function onClick(e) {
  let selectedBox = $(e.target);

  if(xTurn) {
    let cross = $("<i class='fas fa-times'></i>"); //Skapar ett kryss
    $(selectedBox).append(cross); //Placerar krysset i rutan
    cross.css("font-size", "50px"); //Gör krysset större
    xTurn = false; //Ej längre X:s tur
  }
  else {
    let circle = $("<i class='far fa-circle'></i>"); //Skapar en cirkel
    $(selectedBox).append(circle); //Placerar cirkeln i rutan
    circle.css("font-size", "50px"); //Gör cirkeln större
    xTurn = true; //X:s tur
  }
}

$(".box").on("click", onClick);
