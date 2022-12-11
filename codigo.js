function agregarItem() {
    const textoNuevoItem = document.getElementById("itemNew").value;
    console.log(textoNuevoItem);

    const itemsito = document.createElement('li');
    const recipiente = document.createElement('p')

    const listita = document.getElementById('first_list');

    recipiente.appendChild(document.createTextNode(textoNuevoItem));

    document.querySelector("#listarda").appendChild(itemsito).appendChild(recipiente)
    
}
