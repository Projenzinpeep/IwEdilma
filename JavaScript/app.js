
function imprime() {
    let lg = document.getElementById("login").value
    let ps = document.getElementById("pass").value

    let login = "Enzo"
    let senha = "etec2023"

    if(lg == login && ps == senha) {
        alert("Você logou!")

    }


    //alert("Seu login é: " + lg + "\n Sua senha é: " + ps)

}   


//var n1 = parseFloat(document.getElementById("num1").value)
//var n2 = parseFloat(document.getElementById("num2").value)



function soma(a1,a2){

    let total = a1 + a2

    alert("A soma é: " + total)
}

function versoma(){
    soma()
}