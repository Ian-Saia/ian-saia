let coutas= parseFloat(prompt("elegir cantidad de coutas"));
let libros_costo = prompt("ingrese coste total de su compra"); //lo ideal seria poder setear la variable del coste del libro en base a la cantidad de unidades fisicas(en este caso que todas las unidades fisicas cuestan lo mismo)
let libros_fisicos = prompt('ingrese cantidad de libros');


function libros_fisico_total(){
      if (parseInt(libros_fisicos) < 4){
        console.log ("Actualmente solamente hacemos envios si el pedido supera los 5 libros");
      }
     else if (parseInt(libros_fisicos) >=5 ){
        console.log ("Tu pedido supera los 5 libros! te vamos a estar enviando un mail con los detalles de la entrega");
      }
}

function libros_costo_total(){
          if (parseInt(libros_costo) < 1000){
            console.log ("Actualmente solamente hacemos envios si el pedido supera los 2000 pesos");
          }
        else if (parseInt(libros_costo) >= 1000){
            console.log ("tu pedido supera los 2000 pesos! te vamos a estar enviando un mail con los detalles de la entrega")
          }
}

function Cuotas_calculadora( libros_costo,coutas ){ 
    if ( coutas == 3 ){
        return libros_costo % 3;
    }
    else if (coutas == 6){
        return libros_costo % 6;
    }
    else if (coutas == 12){
        return libros_costo % 12;
    }
}


function libros_fisicos_reminder(){
        console.log("tu total de libros es:", libros_fisicos);
}

function libros_costo_reminder(){
        console.log("tu importe total es:", libros_costo);
}
console.log ("Informacion de tu cuotas",libros_costo+Cuotas_calculadora(coutas,libros_costo)); //me tira undefined
//mas adelante quisiera poder hacer un statement de libros totales
libros_costo_reminder()
libros_fisicos_reminder()
Cuotas_calculadora()
libros_costo_total()
libros_fisico_total()




