function addChar(input, character) {
    if(input.value == null || input.value == "0")
    input.value = character
    else
    input.value += character
    }

function cos (form){
    form.resultado = Math.cos(form.resultado.value);
}
function sin (form){
    form.resultado = Math.sin(form.resultado.value);
}

function tan (form){
    form.resultado = Math.tan(form.resultado.value);
}

function ln (form){
    form.resultado.value = Math.log(form.resultado.value)
}
 

 function exp(form) {
    form.resultado.value = Math.exp(form.resultado.value);
    }
    
    function deleteChar(input) {
    input.value = input.value.substring(0, input.value.length - 1)
    }
    var val = 0.0;
    function percent(input) {
    val = input.value;
    input.value = input.value + "%";
    }
    function changeSign(input) {
    if(input.value.substring(0, 1) == "-")
    input.value = input.value.substring(1, input.value.length)
    else
    input.value = "-" + input.value
    }
    function compute(form) {
    form.resultado.value = eval(form.resultado.value);
    }
    function square(form) {
    form.resultado.value = eval(form.resultado.value) * eval(form.resultado.value)
    }
    function checkNum(str) {
    for (var i = 0; i < str.length; i++) {
    var ch = str.charAt(i);
    if (ch < "0" || ch > "9") {
    if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
    && ch != "(" && ch!= ")" && ch != "%") {
    alert("invalid entry!")
    return false
    }
    }
    }
    return true











/*function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
  }
  
  function clean(){
      document.getElementById('resultado').innerHTML=" ";
  }
  
  function back(){
      var resultado = document.getElementById('resultado').innerHTML;
      document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1);
  }
  
  function calcular(){
      var resultado = document.getElementById('resultado').innerHTML;
      if(resultado){
          document.getElementById('resultado').innerHTML = eval(resultado);
      }else{
          document.getElementById('resultado').innerHTML = "Error";
      }
  }*/