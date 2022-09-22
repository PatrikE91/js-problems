function range(arr){
    let max = Math.max(...arr)
    let min = Math.min(...arr)

    console.log(max - min)
}

range([2,6,43,80,10])