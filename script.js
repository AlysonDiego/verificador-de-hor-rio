// function carregar() {
//   var msg = window.document.getElementById("msg");
//   var img = window.document.getElementById("imagem");
//   var data = new Date();
//   var hora = data.getHours();
//   msg.innerHTML = `Agora são ${hora} horas`;
//   if (hora >= 0 && hora < 12) {
//     img.src = "foto-manhã.png";
//     document.body.style.background = "#e2cd9f";
//   } else if (hora >= 12 && hora <= 18) {
//     img.src = "foto-tarde.png";
//     document.body.style.background = "#b9846f";
//   } else {
//     img.src = "foto-noite.png";
//     document.body.style.background = "#515154";
//   }
// }

function carregar() {
  const msg = document.getElementById("msg");
  const img = document.getElementById("imagem");
  const hora = new Date().getHours();
  msg.innerHTML = `Agora são ${hora} horas`;

  if (hora < 12) {
    img.src = "foto-manhã.png";
    document.body.style.background = "#e2cd9f";
  } else if (hora < 18) {
    img.src = "foto-tarde.png";
    document.body.style.background = "#b9846f";
  } else {
    img.src = "foto-noite.png";
    document.body.style.background = "#515154";
  }
}
