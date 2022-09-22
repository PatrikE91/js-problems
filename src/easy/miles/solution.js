function toMiles(num){
    let miles = 0.621371
    if(num > 1){
        miles = num * miles
    }
    return console.log(Math.ceil(miles))
}

toMiles(1)