console.log('estoy')
function agregarItem() {
    let i = 4;

    const inpuT = document.getElementById("contenido_usuario").value;
    console.log(inpuT);

    const li = document.createElement('li');
    const span = document.createElement('span');
    const boton = document.createElement('button');

    const idDelBoton = "btn_D" + i;
   




    const lista = document.getElementsByClassName('first_list');
    li.setAttribute("id",`D${i}`);
    li.textContent = `${inpuT}`;

    boton.appendChild(document.createTextNode("D"));
    boton.setAttribute("type","button");
    boton.setAttribute("id",`btn_D${i}`);
    boton.setAttribute("onclick", `borrarItem("${idDelBoton}")`)


    document.querySelector("#lista").appendChild(li)
    document.querySelector(`#D${i}`).appendChild(boton)
    i++;
}

function borrarItem(idBOTON) {

    const botonD = document.getElementById(idBOTON);
    botonD.parentNode.parentNode.removeChild(botonD.parentNode)       
}