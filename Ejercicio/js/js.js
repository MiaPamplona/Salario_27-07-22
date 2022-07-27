let nombre;
let unidades;
let categoria;
let salariom;

const salario = 1500000;
const ct1 = 2000000;
const ct2 = 2100000;
const ct3 = 2200000;
const ct4 = 2400000;

let form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    LeerDatos()
})

function LeerDatos() {
    nombre = document.getElementById('nombre').value
    unidades = Number(document.getElementById('unidades').value)
    categoria = document.getElementById('categoria').value

    ValidarDatos(nombre, unidades, categoria)
}

function ValidarDatos(nombre, unidades, categoria) {
    if (isNaN(nombre) == false || nombre.length == 0 || unidades.length <= 0) {
        alert("Datos incompletos")
    }
    else {
        alert("Datos completos")
    }

    operacion(unidades, categoria)
}

function operacion(unidades, categoria) {
    if (categoria == 1) {
        if (unidades > 50) {
            salariom = ct1 + (ct1 * 0.05)
        }
        else {
            salariom = salario
        }
    }
    else if (categoria == 2) {
        if (unidades > 50) {
            salariom = ct2 + (ct2 * 0.07)
        }
        else {
            salariom = salario
        }
    }
    else if (categoria == 3) {
        if (unidades > 50) {
            salariom = ct3 + (ct3 * 0.1)
        }
        else {
            salariom = salario
        }
    }
    else if (categoria == 4) {
        if (unidades > 50) {
            salariom = ct4 + (ct4 * 0.15)
        }
        else {
            salariom = salario
        }
    }
    document.getElementById("salario").value = salariom
}