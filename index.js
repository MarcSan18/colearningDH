const carros = []; // colchete para array guarda coleção

const carro = {
    modelo: 'Civic',
    marca: 'Honda',
    ano: 2020
}; // chaves para objeto guarda informacoes do carro

console.log('Array vazio', carros);

// adiciona um item no final do array
carros.push(carro);

console.log('Array com carro', carros);

function adicionarCarro(carroAdicionar) {
    carros.push(carroAdicionar);
}

const carroNovo = {
    modelo: 'Jetta',
    marca: 'Volkswagen',
    ano: 2021
};

function adionaVariosCarros(callback, carrosAdicionar) {
    carrosAdicionar.forEach((valor, index) => {
        callback(valor);
    });
}

// for(let i = 0; i < carroAdicionar.lenth; i++)

[1, 5, 9, 410, 543]

// adicionarCarro();
// Passando funcao adicionarCarro (callback) sem paranteses,
// pois a responsabilidade é da funcao pai: adionarVariosCarros
adionaVariosCarros(adicionarCarro, carros);

console.log(carros);


