const { select, input, checkbox } = require ('@inquirer/prompts');
const { stringify } = require('querystring');

const fs = require ("fs").promises

let mensagem = "Bem Vindo ao APP de Metas";


let metas

const carregarMetas = async () => {
   
    try{
        const dados = await fs.readFile("metas.json", "utf-8")
        metas= JSON.parse(dados)
    }
    catch(erro) {
        metas =[]
    }
}

const salvarMetas = async () => {
    await fs.writeFile("metas.json", JSON.stringify(metas, null, 2))
}

const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a Meta:"})

    if(meta.length == 0) {
        mensagem = 'A meta não pode ser vazia'
        return
    }

    metas.push(
        { value: meta, checked: false }
    )

    mensagem = "Meta cadastrada com sucesso!"
}  

const listarMetas = async () => {
    if(metas.length == 0) {
        mensagem = "Não existem metas!"
        return
    }
    const respostas = await checkbox ({
        message: "Use as setas para mudar de meta, espaço para marcar ou desmarcar e o Enter para finalizar essa etapa",
        choices: [...metas], 
        instructions: false,
    })

    metas.forEach((m) => {
        m.checked = false
    })

  
    if(respostas.length == 0) {
        mensagem = "Nenhuma meta selecionada"
        return
    }

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true
    })

    mensagem = 'Meta(s) marcada(s) Concluída(s)'
}

const metasRealizadas = async () => {
    if(metas.length == 0) {
        mensagem = "Não existem metas!"
        return
    }
    
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })
    if(realizadas.length == 0) {
        mensagem = "Não existem metas realizadas! :("
        return
    }

    await select({
        message: "Metas Realizadas: " + realizadas.length,
        choices: [...realizadas]
    })
    
}

const metasAbertas = async () => {
    if(metas.length == 0) {
        mensagem = "Não existem metas!"
        return
    }

    const abertas = metas.filter((meta) => {
        return meta.checked !=true
    })

    if(abertas.length == 0) {
        mensagem = "Não existem metas abertas! :)"
        return
    }

    await select ({
        message: "Metas Abertas: " + abertas.length,
        choices: [...abertas]
    })
}

const deletarMetas = async () => {
    if(metas.length == 0) {
        mensagem = "Não existem metas!"
        return
    }
   
    const metasDesmarcadas = metas.map((meta) => {
        return { value: meta.value, checked: false }
    })


    const intensADeletar = await checkbox ({
        message: "Selecione um item para deletar",
        choices: [...metasDesmarcadas], 
        instructions: false,
    })

    if(intensADeletar.length == 0) {
        console.log("Nenhum item para deletar")
        return
    }
        intensADeletar.forEach((item) => {
            metas = metas.filter((meta) => {
                return meta.value != item
        })

        console.log("Meta(s) Deletada(s) com sucesso!")

    })

    console.log(intensADeletar)

}

const mostrarMensagem = () => {
    console.clear();

    if(mensagem != "") {
        console.log(mensagem)
        console.log("")
        console.log
        mensagem = ""
    }
}


const start = async () => {
    await carregarMetas()

    while(true){
        mostrarMensagem()
        await salvarMetas()
        
        const opcao = await select({               
            message: "Menu >",
            choices: [
            {
                name: "Cadastrar Meta",
                value: "cadastrar"
            },
            {
                name: "Listar Metas",
                value: "listar"
            },
            {
                name: "Metas Realizadas",
                value: "realizadas"
            },
            {
                name: "Metas Abertas",
                value: "abertas"
            },
            {
                name: "Deletar Metas",
                value: "deletar"
            },
            {
                name: "Sair",
                value: "sair"
            }

        ] 
    })
       
        switch(opcao) {
            case "cadastrar":
                await cadastrarMeta()
                break
            case "listar":
                await listarMetas()
                break
            case "realizadas":
                await metasRealizadas()
                break
            case "abertas":
                await metasAbertas()
                break
            case "deletar":
                await deletarMetas()
                break
            case "sair":
                console.log("Até a próxima!")
                return
        }
    }
}

start();
