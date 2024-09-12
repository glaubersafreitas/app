## Linguagem de Programação

- Maneira de enviar instruções para o computador
- Algorítimo: Sequência de passos lógica e finita para resolver um problema.

## Peças de uma Linguagem

- Comentários em JS // comentário //
- Declaração de Variáveis (const, let)
- Operadores (atribuição, concatenação, matemáticas, lógicos) 
- Tipos de dados (string, number, bolean)
- Estrutura de Dados (function, object, array)
- Controle de Fluxo (if, else)
- Estrutura de repetição (for, while)

## Fases da Resolução de um Problema

- Coletar os dados
- Processar os dados
- apresentar os dados

## Escopo de Variáveis

Variáveis globais e locais
Constantes

Ex:

// Hello World //
const mensagem = "Olá eu!"
{
    const mensagem = "Olá, Mundo!"
    console.log(mensagem);
}

console.log(mensagem);
## Tipos de Dados

String = textos "" '' ``
Number = Números 2 1.4
Função - geralmente está fora do objeto, enquanto o método está dentro
Bolean = true ou false

### Arrays:

Uma lista que contem qualquer tipo de dados

### Objetos

Atributos e métodos
Criação e Manipulação de Objetos
Acesso à propriedades de objetos

let metas = ["Glauber", "Alô"]

console.log (metas[1] + ", " + metas[0] + "!")

log: (info) => {
        console.log(info)
    }

    //meta.value = "não é mais ler um livro"

//meta.log(meta.value)
// arrays [ ] , objetos { }



## Operadores
Operador de Atribuição de Valor =
Operador de Concatenação +
Operador de Comparação == != <= >= < >


## Functions
- Criar, passar argumento
- executar
- arrow function

const start = () => {
    let count = 0
}

- named function

function start() {
    console.log ("começou")
}
## Estrutura de repetição

- While

Exemplo
const start = () => {
    let count = 0
    while (count <= 10){
        console.log (count)
        count = count + 1
    }
    
}

start ()

----------------------------------------------------
## Condicionais

- Switch

const start = () => {
    while(true){
        let opcao = "sair"
        switch(opcao) {
            case "cadastrar":
                console.log ("Vamos cadastrar")
                break
            case "listar":
                console.log ("Vamos Listar!")
                break
            case "sair":
                return
        }
    }

    --------------------------------------------------

    if/else

## Importação de módulos em Node.js
npm - node package manager

- Importação de Módulos (require, CommonJS)
- Biblioteca "inquirer" para criar prompts interativos

## Programação Assíncrona e Promises

- uso de funções assíncronas (async/await)

--- Await - para aguardar que o usuário selecione algo
    --- Sempre antes de um await, a função deve possuir um assync









