var carros = [];
carros.push("ferrari", "porshe", "audi", "mustang");
imprimirLista(carros);

carros.splice(2,2);

imprimirLista(carros);

function imprimirLista(carros){
    for (i = 0; i< carros.length; i++){
        console.log(carros[i]);
    }
};
