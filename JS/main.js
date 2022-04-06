function algoritmo1() {
  var v = parseInt(prompt("Ingrese la velocidad en m"));
  var t = parseInt(prompt("Ingrese el valor del tiempo en s"));
  distancia = v * t;
  alert(distancia);
}

function algoritmo2() {
  var a = parseInt(prompt("Ingrese el número de la tabla que desea repasar: "));
  for (var n = 0; n <= 10; n++) {
    document.write(a + "x" + n + "=" + (a * n));
  }
}

function algoritmo3() {
  var r = parseInt(prompt("Ingrese el radio del cilindro: "));
  var h = parseInt(prompt("Ingrese la altura del cilindro: "));
  var vol = Math.PI * Math.pow(r, 2) * h;
  var area = 2 * Math.PI * r * h;
  alert("El area del cilindro es: " + area + " El volumen del cilindro es: " + vol);
}

function algoritmo4() {
  var F = parseFloat(prompt("Ingrese la temperatura en grados Fahrenheit: "))
  var C = (F - 32) * 5 / 9;
  alert("la converción de grados Fahrenheit a grados Celsius es: " + C);

}

function algoritmo5() {
  var n = parseInt(prompt("Ingrese el número del cual desea saber la raiz cuadrada y raiz cubica: "));
  var cuadrada = Math.sqrt(n);
  var cubica = Math.pow(n, 1 / 3);
  alert("Raiz cuadrada de " + n + " es: " + cuadrada + " y la Raiz cubica es: " + cubica);
}

function algoritmo6() {
  var lado1 = parseFloat(prompt("Ingrese el valor del primer lado del triangulo: "));
  var lado2 = parseFloat(prompt("Ingrese el valor del segundo lado del triangulo: "));
  var lado3 = parseFloat(prompt("Ingrese el valor del tecer lado del triangulo: "));
  if ((lado1 == lado2) && (lado2 == lado3)) {
    alert("El triangulo es Equilátero");
  } if ((lado1 != lado2) && (lado2 != lado3)){
    alert("El triangulo es Escaleno");
  } if ((lado1 == lado2) && (lado2 != lado3)) {
    alert("El triangulo es Isoceles");
  }
}

function algoritmo7() {
var numero = parseInt(prompt("Digite un número de 1 a 10 el desea ver en número romano: "));
if(numero==1){
  alert ("El número "+numero+" en romano es: I");
}if(numero==2){
  alert("El número "+numero+" en romano es: II");
}if(numero==3){
  alert("El número "+numero+" en romano es: III");
}if(numero==4){
  alert("El número "+numero+" en romano es: IV");
}if(numero==5){
alert ("El número "+numero+" en romano es: V");
}if(numero==6){
  alert("El número "+numero+" en romano es: VI");
}if(numero==7){
  alert("El número "+numero+" en romano es: VII");
}if(numero==8){
  alert("El número "+numero+" en romanos es: VIII");
}if(numero==9){
  alert("El número "+numero+" en romano es: IX");
}if(numero==10){
alert("El número "+numero+" en romano es: X");
}
}

function algoritmo8() {
for (var intento= 0; intento < 3; intento++) {
  var contraseña = 123;
  var clave = parseInt(prompt("Ingrese la contraseña: "));
  if(clave==contraseña){
    alert ("La contraseña digitada es correcta, !BIENBENIDO¡");
  }
  alert ("La contraseña es incorrecta, intentelo nuevamente");
  
}
alert("Lo sentimos vuelva a intentar dentro de 2 minutos");
}