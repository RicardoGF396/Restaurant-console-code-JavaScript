var total = [];
var nachos=30;
var pizza = 120;
var tacos = 10;
var agua = 15;
var sodas = 30;
var cerveza = 45;

var nachosCount;
var pizzaCount;
var tacosCount;
var aguaCount;
var sodasCount;
var cervezaCount;



document.write("<p>Bienvenido al Restaurante La Salle<br>Este es el menú:<br><br>"+
"Platillos:<br>Nachos: $30<br>Pizza: $120<br>Tacos: $10<br><br>"+
"Bebidas:<br>Agua Natural: $15<br>Sodas: $30<br>Cerveza: $45<br><br> </p> ");

document.write("<h4>Alimentos -------- Total -------- Piezas</h4>");

do {

    var elegir = prompt("¿Qué vas a ordenar? Escribe Salir para terminar tu orden");
    

    switch(elegir){
        case "Nachos": 
        nachosCount = prompt("¿Cuántos nachos vas a querer?");       
        document.write("<p>Nachos  _________$"+ nachos * nachosCount +" ----------------- "+ nachosCount +"</p>") + total.push(nachos * nachosCount);
        break;
        
        case "Pizza": 
        pizzaCount = prompt ("¿Cuántas pizzas vas a querer?");
        document.write("<p>Pizza  _________$"+ pizza * pizzaCount +" ----------------- "+ pizzaCount +"</p>") + total.push(pizza * pizzaCount);
        break;

        case "Tacos": 
        tacosCount = prompt ("¿Cuántas tacos vas a querer?");
        document.write("<p>Tacos  _________$"+tacos * tacosCount+" -----------------"+ tacosCount +"</p>") + total.push(tacos * tacosCount);
        break;
        
        case "Agua Natural": 
        aguaCount = prompt ("¿Cuántas aguas vas a querer?");
        document.write("<p>Agua Natural  _________$"+agua * aguaCount+" -----------------"+aguaCount+"</p>") + total.push(agua * aguaCount);
        break;


        case "Sodas": 
        sodasCount = prompt ("¿Cuántas sodas vas a querer?");
        document.write("<p>Sodas  _________$"+sodas * sodasCount+" -----------------"+sodasCount+"</p>") + total.push(sodas * sodasCount);
        break;

        case "Cerveza": 
        cervezaCount = prompt ("¿Cuántas aguas vas a querer?")
        document.write("<p>Cerveza  _________$"+cerveza *cervezaCount+" -----------------"+cervezaCount+"</p>") + total.push(cerveza *cervezaCount);
        break;
        
    }

    
} while (elegir!="Salir");

let suma= 0;

for(var i = 0; i<total.length; i++){
    suma += total[i];
}


document.write("<h3>El total a pagar es: $"+suma+"</h3>");