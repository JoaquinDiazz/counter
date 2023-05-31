const contador = document.querySelector("#contador")
const aumentar = document.querySelector("#aumentar")
const resetear = document.querySelector("#resetear")
const disminuir = document.querySelector("#disminuir")

let numero = 0

aumentar.addEventListener("click", () => { 
    numero++
    contador.textContent = numero
    if (numero === 0) {
        contador.style.color = "white"
    } else if (numero > 0) {
        contador.style.color = "green"
    }
})

resetear.addEventListener("click", () => {
    numero = 0
    contador.textContent = numero
    contador.style.color = "white"
})

disminuir.addEventListener("click", () => {
    numero--
    contador.textContent = numero
    if (numero === 0) {
        contador.style.color = "white"
    } else if (numero < 0) {
        contador.style.color = "red"
    }
})


 


