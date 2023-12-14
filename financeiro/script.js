import {DBproduto} from "../api";
import {DBvenda} from "../api";
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