import {DBproduto} from "../api.js";
import {DBvenda} from "../api.js";
import {baseUrl} from'../api.js'
const myHeaders = {
    "Content-Type": "application/json",
};
async function financa(){
    const res = await fetch(`${DBproduto}/produto`,
    {
        myHeaders: myHeaders
    })      

    console.log(DBvenda)
    DBproduto
    DBvenda

    const vend = await res.json()
    console.log(vend)

    
}
financa()