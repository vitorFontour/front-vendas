import {baseUrl} from'../api.js'
const myHeaders = {
    "Content-Type": "application/json",
};
async function lista() {
    const res = await fetch(
        `${baseUrl}/produto`,
        {
            headers: myHeaders
        }
    )
    const prod = await res.json()
    console.log(prod)

    const ul = document.querySelector("ul")
    ul.innerHTML = ""
    prod.forEach((produto) => {
        ul.insertAdjacentHTML("beforeend", `
            <li>
                <p>descricao: ${produto.descricao}</p>
                <p>preco: $ ${parseInt(produto.preco).toFixed(2)}</p>
                <p>custo: $ ${parseInt(produto.custo).toFixed(2)}
            </li>
        `)
    })
}
lista()