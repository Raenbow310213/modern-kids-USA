let op
function coc() {
    let resald
    let num1 = Number(document.getElementById("number1").value)
    let num2 = Number(document.getElementById("number2").value)
    switch (op) {
        case '+':
            resald = num1 + num2
            break
        case '-':
            resald = num1 - num2
            break
        case '*':
            resald = num1 * num2
            break
        case ':':
            resald = num1 / num2
            break
    }
    document.getElementById("resald").innerHTML = resald
}

