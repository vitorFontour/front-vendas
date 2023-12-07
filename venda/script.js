const myHeaders = {
    "Content-Type": "application/json",
};
async function getProduto(){  

    const res = await fetch("http://localhost:3001/produto")
   

    const produtos = await res.json()
    const select = document.querySelector('select')

    produtos.forEach(callback=>{
        select.insertAdjacentHTML("beforeend",`
        <option value=${callback.id}>${callback.descricao}</option>
        `)
    })
}
getProduto()

function venda(){
    const inputQuantidade = document.querySelector("#input-quantidade")
    const selectVenda = document.querySelector("#select-venda")

    const venda = {
        produto: selectVenda.ariaValueMax,
        
    }

}
const dia = new Date().getDate()
console.log(dia)
const mes = new Date().getMonth()



const form = document.querySelector('form')
form.addEventListener("submit", (event) => {
    event.preventDefault()
    venda()
})
