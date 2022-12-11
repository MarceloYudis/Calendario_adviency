console.log('estoy')
function agregarItem() {
    let i = 4;

    const inpuT = document.getElementById("contenido_usuario").value;
    console.log(inpuT);

    const li = document.createElement('li');
    const span = document.createElement('span');
    const boton = document.createElement('button');

    const idDelBoton = `btn_D${i}`;
    const borrar = `borrarItem(${idDelBoton})`;


    const lista = document.getElementsByClassName('first_list');
    li.setAttribute("id",`D${i}`);

    boton.appendChild(document.createTextNode("D"));
    boton.setAttribute("type","button")
    boton.setAttribute("id",`btn_D${i}`);
    boton.setAttribute("onclick", borrar);

    span.appendChild(document.createTextNode(inpuT));
    document.querySelector("#lista").appendChild(li).appendChild(span)
    document.querySelector(`#D${i}`).appendChild(boton)
    i++;
}

function borrarItem(idBOTON) {

    const botonD = document.getElementById(idBOTON);
    botonD.parentNode.parentNode.removeChild(botonD.parentNode)       
}