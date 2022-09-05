function factorial(num){
    let sum =1
    for(i = 1; i <= num; i++){
       sum = i * sum
    }
    return console.log(sum)
}
factorial(5)