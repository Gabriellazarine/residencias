let residencias = require('./residencias');

function listarResidencia() {
    residencias.forEach((residencias, index) => {
        console.log(`${index +1}. Bairro: ${residencias.bairro}, rua: ${residencias.rua}, Moradores: ${residencias.morador}`);
    });
};

module.exports = { listarResidencia };