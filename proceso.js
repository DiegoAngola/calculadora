let visor = document.querySelector(".visor");
// como necesitamos una coleccion de botones, entonces usaremos getelementbyclassname
let botones = document.getElementsByClassName("boton");
console.log("coleccion de botones ", botones);


for (let i = 0; i < botones.length; i++) {
   console.log("agregamos el listener a:", botones[i]);
   botones[i].addEventListener("click", () => {
       console.log("El listener capturo el: ", botones[i], "y va a tomar accion");
       accion(botones[i]);
   });
}

function accion(boton) {
    console.log("Valor del boton presionado", boton.innerHTML);
    switch (boton.innerHTML) {
        case "C":
            console.log("Con C se borra visor");
            borrar();
            break;
            case "=":
                console.log("Con =, calcula el resultado");
                resultado();
                break;
        default:
            console.log("Va armando el visor");
            actualizarVisor(boton);
            break;
    }
    
}

function borrar() {
    console.log("Procedemos al borrado del visor");
    visor.innerHTML = "0";
}

function actualizarVisor(boton) {
    if (visor.innerHTML == 0) {
        visor.innerHTML = "";
    }
    visor.innerHTML += boton.innerHTML;
}

function resultado() {
    console.log("Intenta evaluar el contenido del visor");
    visor.innerHTML = eval(visor.innerHTML);            // intenta evaluar y ejecutar lo que esta escrito en lo que lee (visor.innerHTML)
    
}