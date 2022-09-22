function repeat(str){
    let newArr = str.split('')
    let test = []
    newArr.forEach(e => {
        test.push(e.repeat(2))
    });
    console.log(test.join(''))
}

repeat('hello')