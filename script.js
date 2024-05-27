let calcular = function(){
    let x = parseInt(document.getElementById("val1").value);
    let y = parseInt(document.getElementById("val2").value);

    let r = x+y; //x-y  x*y  x/y

    //Funciones matemáticas (Math)
    //Potencia = Math.pow(base, potencia), Ejemplo: potencia de 5 elevado a 7
    //Math.pow(5,7);
    document.getElementById("res").innerHTML = "<b>"+r+"</b>"
}