import {baseUrl} from'../api.js'
async function cadastro() {
    const myHeaders = {
        "Content-Type": "application/json",
    };
    const inputDescricao = document.querySelector("#input-descricao")
    const inputPreco = document.querySelector("#input-preco")
    const inputCusto = document.querySelector("#input-custo")


    const produto = {
        descricao: inputDescricao.value,
        preco: inputPreco.value,
        custo: inputCusto.value
    }
    console.log(produto)
    const bodyJson = JSON.stringify(produto)
    console.log(bodyJson)
    const btnCadastro = document.querySelector("#btn-cadastro")

    const res = await fetch(
        `${baseUrl}/produto`,
        {
            headers: myHeaders,
            method: "POST",
            body: bodyJson
        }
    )
    console.log(await res.json())
}

const form = document.querySelector('form')
form.addEventListener("submit", (event) => {
    event.preventDefault()
    cadastro()
})