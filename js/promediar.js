function names(){
    var nom=document.getElementById("nombre").value;
    var ape=document.getElementById("apellido").value;

    if(nom==="" || ape===""){
        /* alert("Ingrese los datos del estudiante"); */
        swal("Ingrese los datos del estudiante", "Todos los campos debe ser llenado", "warning");           
        return false;
        
    }
    else{
        var datos=""+nom+" "+ape;
        document.getElementById("nombres").innerHTML=datos;
    }
}



function total(){
    var not1=parseInt(document.getElementById("nota1").value);
    var not2=parseInt(document.getElementById("nota2").value);
    var not3=parseInt(document.getElementById("nota3").value);

       

    if(not1>20 || not1>20 || not3>20){
        /* alert("Las notas no pueden ser mas de 20"); */
        swal("Las notas no pueden ser mas de 20", "La nota es hasta 20 puntos", "warning");return false;
        
    }
    else{
        var todo =not1+not2+not3;
        /* document.getElementById("total").innerHTML="Nota 1 :"+not1+ "<br> Nota 2 :"+not2+ "<br> Nota 3 :"+not3+"<br>__________________<br> Total es :"+todo; */
        document.getElementById("total2").innerHTML=todo;

        
    }

}
function promedio(){
    var not1=parseInt(document.getElementById("nota1").value);
    var not2=parseInt(document.getElementById("nota2").value);
    var not3=parseInt(document.getElementById("nota3").value);

    if(not1>20 || not2>20 || not3>20){
        /* alert("Las notas no pueden ser mas de 20"); */
        swal("Las notas no pueden ser mas de 20", "La nota es hasta 20 puntos", "warning");return false;
    }
    else{
        /* var totall=not1+not2+not3;
        var prom=totall/3;
        document.getElementById("prom").innerHTML="Su promedio es :"+prom; */
        var p=(parseFloat(not1)+parseFloat(not2)+parseFloat(not3))/3;
        document.getElementById("prom2").innerHTML =p.toFixed(1);
    }
}
function calificacion(){
    var not1=parseInt(document.getElementById("nota1").value);
    var not2=parseInt(document.getElementById("nota2").value);
    var not3=parseInt(document.getElementById("nota3").value);

    if(not1>20 || not2>20 || not3>20){
        /* alert("Las notas no pueden ser mas de 20"); */
        swal("Las notas no pueden ser mas de 20", "La nota es hasta 20 puntos", "warning");return false;
    }
    else{
        var prom;
        prom =(not1+not2+not3)/3;

        if(prom<=12.5){
            document.getElementById("calific2").innerHTML="!Desaprobado¡";
        }
        else {
            document.getElementById("calific2").innerHTML="!Aprobado¡";
        }
    }

}