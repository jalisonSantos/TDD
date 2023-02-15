function sum(num1,num2){
    if(isNaN(num1) || isNaN(num2)){
        throw 'nao e um numero'
    }
    return num1 + num2
}

module.exports = {
    sum
}