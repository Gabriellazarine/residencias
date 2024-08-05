const prompt = require('prompt-sync')();
const { adicionarResidencia } = require('./adicionar');
const {listarResidencia} = require('./listar');
const {atualizarResidencia} = require('./atualizar');
const {removerResidencia} = require('./remover');

function Menu() {
    console.log(`
    1. Listar Residências
    2. Adicionar Residência
    3. Atualizar Residências 
    4. Remover residência
    5. Sair
    `)

const opcao = prompt('Escolha uma opção: ');
let index;

    switch(opcao) {
        case '1':
        listarResidencia();
            Menu();
            break
        case '2':
            let bairro = prompt('Insira o nome do Bairro: ');
            let rua = prompt('Insira o nome da rua: ');
            let morador = prompt('Insira o nome dos moradores: ');
            adicionarResidencia({bairro, rua, morador});
            console.log('Residencia atualizada com sucesso!');
            Menu();
            break
        case '3':
            listarResidencia();
            index = parseInt(prompt('Número da rua a atualizar: ')) -1;
            const novoBairro = prompt('Insira o nome do novo bairro: ');
            const novaRua = prompt('Insira o nome da nova Rua: ');
            const novoMorador = prompt('Insira o nome dos novos moradores: ');
            atualizarResidencia(index, {bairro:novoBairro, rua:novaRua, morador:novoMorador});
            console.log('Contato atualizado com sucesso!');
            Menu();
            break;
        case '4':
            listarResidencia();
            index = parseInt(prompt('Número da residência a remover: ')) -1;
            removerResidencia(index);
            console.log('Residencia removida com sucesso!');
            Menu();
            break
        case '5':
            console.log('Até mais!');
            break;
            default:
                console.log('Opção inválida');
                Menu();
                break;
        }
    }   

Menu();