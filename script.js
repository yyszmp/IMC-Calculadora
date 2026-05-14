function calcularIMC(){

  let peso =
  document.getElementById("peso").value;

  let altura =
  document.getElementById("altura").value;

  let imc =
  peso / (altura * altura);

  imc = imc.toFixed(1);

  document.getElementById("resultado")
  .innerHTML = imc;

  let roda =
  document.getElementById("roda");

  let texto =
  document.getElementById("classificacao");

  let rotacao = 0;

  if(imc < 18.5){

    rotacao = 320;

    texto.innerHTML =
    "Abaixo do peso";

  }

  else if(imc < 25){

    rotacao = 45;

    texto.innerHTML =
    "Peso normal";

  }

  else if(imc < 30){

    rotacao = 135;

    texto.innerHTML =
    "Sobrepeso";

  }

  else{

    rotacao = 225;

    texto.innerHTML =
    "Obesidade";

  }

  roda.style.transform =
  `rotate(${rotacao}deg)`;
}