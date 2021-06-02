import "./style.css";
window.onload = function myFunction() {
  let pinta = ["spade", "heart", "club", "diamond"];
  let valor = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "Q", "J", "K"];
  //write your code here
  /* para la pinta */
  var pintanumero = Math.floor(Math.random() * pinta.length);
  let selecciondepinta = pinta[pintanumero];

  /* para el valor de la carta */
  /* var valorcarta = Math.floor(Math.random() * 12); */
  var valorcarta = Math.floor(Math.random() * valor.length);
  let selecciondevalor = valor[valorcarta];

  let pintacarta = this.document.getElementsByClassName("pinta");
  pintacarta[0].classList.add(pinta[pintanumero]);
  pintacarta[1].classList.add(pinta[pintanumero]);

  let numerocarta = this.document.getElementById("valor");
  numerocarta.innerHTML = valor[valorcarta];
};
