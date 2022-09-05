function sumOfMultiples(num){
    let sum = []
    for(i = 0; i < num; i++){
        if(i % 3 === 0 || i % 5 === 0){
            sum.push(i)
        }
    }
    return sum.reduce((pv, cv) => pv + cv)
}
sumOfMultiples(100)