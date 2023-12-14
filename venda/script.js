import {baseUrl} from'../api.js'
const myHeaders = {
    "Content-Type": "application/json",
};
async function getProduto() {

    const res = await fetch(`${baseUrl}/produto`)


    const produtos = await res.json()
    const select = document.querySelector('select')

    produtos.forEach(callback => {
        select.insertAdjacentHTML("beforeend", `
        <option value=${callback.id}>${callback.descricao}</option>
        `)
    })
}
getProduto()

async function venda() {
    const inputQuantidade = document.querySelector("#input-quantidade")
    const selectVenda = document.querySelector("#select-venda")
    const dia = new Date().getDate()
    const mes = new Date().getMonth() + 1

    const venda = {
        produto: selectVenda.value,
        quantidade: inputQuantidade.value,
        dia: dia,
        mes: mes
    }

    const bodyJson = JSON.stringify(venda)
    const res = await fetch(
        `${baseUrl}/venda`,
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
    venda()
})
